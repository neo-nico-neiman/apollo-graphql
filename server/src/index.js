const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => "track 01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => ({
      name: "Grumpy Cat",
      photo: "https://unsplash.com/photos/75715CVEJhI",
    }),
    thumbnail: () => "https://unsplash.com/photos/75715CVEJhI",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};
const server = new ApolloServer({ typeDefs, mocks: mocks });

server
  .listen()
  .then(() => console.log("Server is running! Listening on port 4000"));
