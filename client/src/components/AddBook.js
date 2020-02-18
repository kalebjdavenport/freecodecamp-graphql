import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { AUTHORS, ADD_BOOK, BOOKS } from "../queries/queries";

const AddBook = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState();

  const [addBook, { book_names }] = useMutation(ADD_BOOK);

  const { loading, error, data } = useQuery(AUTHORS);

  const handleSubmit = e => {
    e.preventDefault();
    addBook({
      variables: {
        name,
        genre,
        authorId
      },
      refetchQueries: [{ query: BOOKS }]
    });
    setName("");
    setGenre("");
    setAuthorId("");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Add a new book</h1>
      <form
        className="w-full align-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Book Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-800 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane Eyre"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Book Genre
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Novel"
              value={genre}
              onChange={e => setGenre(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-5 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Title
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-800 border border-gray-200 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                id="grid-state"
                onChange={e => setAuthorId(e.target.value)}
              >
                {data.authors.map(author => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-100">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-gray-300 hover:bg-gray-200 text-gray-800 hover:text-black border border-gray-800 hover:border-black font-medium mt-4 py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add +
        </button>
      </form>
    </div>
  );
};

export default AddBook;
