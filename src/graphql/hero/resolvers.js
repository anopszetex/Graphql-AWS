const resolvers = {
  Query: {
    getHero() {
      return "batman";
    },
    ping() {
      return "pong";
    },
  },
};

module.exports = resolvers;
