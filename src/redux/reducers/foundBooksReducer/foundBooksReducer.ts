import { extractBookFields } from '../../../utils/extractBookFields';

import { ActionsType, initState } from './types';

const initialState: initState = {
  totalItems: 0,
  booksInfo: [],
};

export const foundBooksReducer = (
  state = initialState,
  action: ActionsType,
): initState => {
  switch (action.type) {
    case 'FOUND_BOOKS/SET-BOOKS':
      return {
        ...state,
        booksInfo: action.books.map(extractBookFields),
        totalItems: action.totalItems,
      };
    case 'FIND_BOOKS/LOAD-MORE':
      return {
        ...state,
        booksInfo: [...state.booksInfo, ...action.books.map(extractBookFields)],
        totalItems: action.totalItems,
      };
    default:
      return state;
  }
};
