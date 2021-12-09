import { currentBookType } from '../types';

export const setBook = (book: currentBookType) =>
  ({
    type: 'CURRENT_BOOK/SET-BOOK',
    book,
  } as const);
