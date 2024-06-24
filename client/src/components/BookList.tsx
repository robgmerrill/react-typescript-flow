import React, { useContext, useEffect } from "react";
import { BookContext } from "../context/BookContext";

const BookList: React.FC = () => {
  const bookContext = useContext(BookContext);

  useEffect(() => {
    if (bookContext) {
      bookContext.fetchBooks();
    }
  }, [bookContext]);

  if (!bookContext) {
    return null; // or handle the null case appropriately
  }

  const { books } = bookContext;

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
