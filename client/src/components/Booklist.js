import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import { BOOKS } from "../queries/queries";
import BookDetails from "./BookDetails";

const Booklist = () => {
  const { loading, error, data } = useQuery(BOOKS);
  const [bookId, setBookId] = useState();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="my-1">
      <ul id="book-list">
        {data.books.map(book => (
          <li
            className="pb-4 Book-link"
            onClick={() => setBookId(book.id)}
            key={book.id}
          >
            {book.name}
          </li>
        ))}
      </ul>
      {bookId && <BookDetails bookId={bookId} />}
    </div>
  );
};

export default Booklist;
