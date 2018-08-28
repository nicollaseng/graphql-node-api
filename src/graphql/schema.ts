import {makeExecutableSchema} from 'graphql-tools'

// ---------- Criação de um mock de um banco de dados -------------

const users: any[] = [
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
]

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

    type Mutation {
        createUser(name: String!, email: String!): User
    }
`

//---------- Criação do Resolver --------------

const resolvers = {
    Query: {
        allUsers: () => users
    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = Object.assign({id: users.length + 1}, args)
            users.push(newUser)
            return newUser
        } 
    }
}

export default makeExecutableSchema({typeDefs, resolvers})