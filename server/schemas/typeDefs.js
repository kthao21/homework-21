const typeDefs = `
type Book {
    _id: ID
    authors: String
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
    password: String
    savedBooks: [bookSchema]
}

type Query {
    books: [Book]
}

type Mutation {
    login(email: String!, passworkd: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    saveBook(authors: [String!], description: String!, title: String!, bookId: String!, image: String!, link: String!)
    removeBook(bookId: String!)
}

`;

module.exports = typeDefs;