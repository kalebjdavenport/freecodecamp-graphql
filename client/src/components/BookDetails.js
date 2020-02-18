import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOK } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: bookId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="Book-details">
      <h2>{data.book.name}</h2>
      <div className="info">
        <p>
          category <span>{data.book.genre}</span>
        </p>
      </div>
      <div className="info">
        <p>
          written by <span>{data.book.author.name}</span>
        </p>
      </div>
      <div className="info">
        <p>All books by this author:</p>
      </div>

      <ul className="books-by-author">
        {data.book.author.books.map(book => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
