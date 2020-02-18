import React from "react";
import "./App.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

// components
import Booklist from "./components/Booklist";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";

// clients
const client = new ApolloClient({
  uri: "http://localhost:4000/api"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main" className="App">
        <header className="App-header">
          <h1>Daddy Dav's Reading List</h1>
        </header>
        <section className="App-body">
          <Booklist />
          <hr className="text-white" />
          <AddBook />
        </section>
      </div>
    </ApolloProvider>
  );
}

export default App;
