import { bookType } from '../types';

export const setBook = (book: bookType) =>
  ({
    type: 'CURRENT_BOOK/SET-BOOK',
    book,
  } as const);
