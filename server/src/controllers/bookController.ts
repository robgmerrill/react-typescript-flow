import { Request, Response } from 'express';

let books = [
  { id: 1, title: '1984' },
  { id: 2, title: 'To Kill a Mockingbird' },
];

export const getBooks = (req: Request, res: Response) => {
  res.json(books);
};

export const addBook = (req: Request, res: Response) => {
  const newBook = { id: books.length + 1, title: req.body.title };
  books.push(newBook);
  res.json(newBook);
};
