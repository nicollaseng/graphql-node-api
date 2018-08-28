"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
// ---------- Criação de um mock de um banco de dados -------------
const users = [
    {
        id: 1,
        name: "Nicollas",
        email: "nicollas@gmail.com"
    },
    {
        id: 2,
        name: "Julie",
        email: "julie@gmail.com"
    }
];
//------------ Criação dos types --------------
const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }
`;
//---------- Criação do Resolver --------------
const resolvers = {
    Query: {
        allUsers: () => users
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
