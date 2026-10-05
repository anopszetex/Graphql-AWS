const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { gql } = require("graphql-tag");

const { readdir } = require("node:fs/promises");

async function getGraphqlFiles() {
  const files = await readdir(__dirname);
  return files.filter((file) => file !== "index.js");
}

function importGraphQLModules(files) {
  return files.reduce(
    (acc, row) => {
      const { schema, resolvers } = require(`./${row}`);

      acc.typeDefs.push(gql(schema));
      acc.resolvers.push(resolvers);

      return acc;
    },
    { typeDefs: [], resolvers: [] }
  );
}

function createExecutableSchema(typedefs, resolvers) {
  return makeExecutableSchema({
    typeDefs: mergeTypeDefs(typedefs),
    resolvers: mergeResolvers(resolvers),
  });
}

module.exports = {
  async buildSchema() {
    const files = await getGraphqlFiles();

    const { typeDefs, resolvers } = importGraphQLModules(files);

    return createExecutableSchema(typeDefs, resolvers);
  },
};
