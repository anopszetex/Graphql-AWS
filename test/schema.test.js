const assert = require("node:assert/strict");
const { test } = require("node:test");
const { graphql } = require("graphql");

const { buildSchema } = require("../src/graphql");

test("assembles the modules into an executable schema", async () => {
  const schema = await buildSchema();
  const result = await graphql({ schema, source: "{ ping getHero }" });

  assert.equal(result.errors, undefined);
  assert.equal(result.data.ping, "pong");
  assert.equal(result.data.getHero, "batman");
});
