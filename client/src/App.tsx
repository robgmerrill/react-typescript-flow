import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import { BookProvider } from "./context/BookContext";

const App: React.FC = () => {
  return (
    <BookProvider>
      <div>
        <AddBook />
        <BookList />
      </div>
    </BookProvider>
  );
};

export default App;
