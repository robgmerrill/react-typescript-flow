import React, { createContext, useState, ReactNode } from "react";
import axios from "axios";

interface Book {
  id: number;
  title: string;
}

interface BookContextType {
  books: Book[];
  fetchBooks: () => void;
  addBook: (book: Book) => void;
}

export const BookContext = createContext<BookContextType | null>(null);

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    // Fetch books from backend API
  };

  const addBook = async (book: Book) => {
    // TODO: Add new book to the books array
  };

  return (
    <BookContext.Provider value={{ books, fetchBooks, addBook }}>
      {children}
    </BookContext.Provider>
  );
};
