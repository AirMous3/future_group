import { BooksType } from '../types';

export const setBooks = (totalItems: number, books: BooksType[]) =>
  ({ type: 'FOUND_BOOKS/SET-BOOKS', books, totalItems } as const);

export const loadMore = (totalItems: number, books: BooksType[]) =>
  ({ type: 'FIND_BOOKS/LOAD-MORE', books, totalItems } as const);
