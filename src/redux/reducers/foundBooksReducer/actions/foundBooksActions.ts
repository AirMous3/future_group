import { foundBooksType } from '../types';

export const setBooks = (totalItems: number, books: foundBooksType[]) =>
  ({ type: 'FOUND_BOOKS/SET-BOOKS', books, totalItems } as const);

export const loadMore = (totalItems: number, books: foundBooksType[]) =>
  ({ type: 'FIND_BOOKS/LOAD-MORE', books, totalItems } as const);
