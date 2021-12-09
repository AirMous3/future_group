import { Dispatch } from 'redux';

import { api } from '../../api/api';
import { extractBookFields } from '../../utils/extractBookFields';

import { setAppStatus } from './appReducer';

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

// TYPE
interface initState {
  totalItems: number;
  booksInfo: {
    id: string;
    image?: string;
    title?: string;
    subTitle?: string;
    categories?: string[];
    author?: string[];
  }[];
}

export interface BooksType {
  id: string;
  volumeInfo: {
    title?: string;
    subtitle?: string;
    categories?: string[];
    authors?: string[];
    imageLinks?: {
      thumbnail: string;
    };
  };
}

type ActionsType = ReturnType<typeof setBooks> | ReturnType<typeof loadMore>;

// AC
export const setBooks = (totalItems: number, books: BooksType[]) =>
  ({ type: 'FOUND_BOOKS/SET-BOOKS', books, totalItems } as const);

export const loadMore = (totalItems: number, books: BooksType[]) =>
  ({ type: 'FIND_BOOKS/LOAD-MORE', books, totalItems } as const);

// THUNK

export const getBooksThunk =
  (book: string, category: string, sorting: string, index: number, maxResults: number) =>
  async (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'));

    const result = await api.getBooks(book, category, sorting, index, maxResults);

    const { totalItems } = result;

    const books = result.items?.map(item => ({
      id: item.id,
      volumeInfo: item.volumeInfo,
    }));
    dispatch(setAppStatus('succeeded'));

    dispatch(setBooks(totalItems, books || []));
  };

export const loadMoreThunk =
  (book: string, category: string, sorting: string, index: number, maxResults: number) =>
  async (dispatch: Dispatch) => {
    dispatch(setAppStatus('disable'));
    const result = await api.getBooks(book, category, sorting, index, maxResults);
    const { totalItems } = result;
    const books = result.items?.map(item => ({
      id: item.id,
      volumeInfo: item.volumeInfo,
    }));
    dispatch(loadMore(totalItems, books || []));
    dispatch(setAppStatus('succeeded'));
  };
