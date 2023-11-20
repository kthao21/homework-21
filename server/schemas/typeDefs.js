const typeDefs = `
type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    password: String
    savedBooks: [Book]
}

type Auth {
    token: String
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, passworkd: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    saveBook(authors: [String!], description: String!, title: String!, bookId: String!, image: String!, link: String!)
    removeBook(bookId: String!)
}

`;

module.exports = typeDefs;