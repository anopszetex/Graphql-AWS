const { ApolloServer } = require("@apollo/server");

const {
  handlers,
  startServerAndCreateLambdaHandler,
} = require("@as-integrations/aws-lambda");

const { buildSchema } = require("./graphql");

const isLocal = process.env.IS_LOCAL;
let serverHandler = null;

async function initApolloServer() {
  if (!serverHandler) {
    const schema = await buildSchema();

    const server = new ApolloServer({
      schema,
      introspection: isLocal,
    });

    serverHandler = startServerAndCreateLambdaHandler(
      server,
      handlers.createAPIGatewayProxyEventV2RequestHandler()
    );

    return serverHandler;
  }

  return serverHandler;
}

module.exports.graphqlHandler = async (event, context) => {
  const handler = await initApolloServer(event, context);

  return handler(event, context);
};
