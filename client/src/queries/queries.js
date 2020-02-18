import gql from "graphql-tag";

export const GET_BOOK = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export const BOOKS = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;

export const AUTHORS = gql`
  {
    authors {
      name
      id
      books {
        name
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
