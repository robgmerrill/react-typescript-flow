import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const AddBook: React.FC = () => {
  const [title, setTitle] = useState("");
  const bookContext = useContext(BookContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to the backend API to add a new book
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book Title"
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
