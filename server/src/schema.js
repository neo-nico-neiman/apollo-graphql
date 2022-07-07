const { gql } = require("apollo-server");

const typeDefs = gql`
type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
}

"A track is a group of Modules that teaches about a specific topic"
    type Author {
        id: ID!
        name: String!
        photo: String
    }

    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: interface
        modulesCount: INT {
        }
    }
`;
module.exports = typeDefs;
