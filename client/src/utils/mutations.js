import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($bookInput: BookInput!) {
  saveBook(bookInput: $bookInput) {
    _id
    email
    username
    bookCount
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
  removeBook(bookId: $bookId) {
    _id
    email
    username
    bookCount
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;