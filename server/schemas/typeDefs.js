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
    addBook(authors: String!, description: String!, bookId: String!, image: String!, link: String!, title: String!): Book
}
`;

module.exports = typeDefs;