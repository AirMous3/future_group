import { Dispatch } from 'redux';

import { api } from '../../api/api';

import { setAppStatus } from './appReducer';

const initialState: initState = {
  image: '',
  description: '',
  title: '',
  categories: [],
  author: [],
  subTitle: '',
};

export const currentBookReducer = (
  state = initialState,
  action: ActionsType,
): initState => {
  switch (action.type) {
    case 'CURRENT_BOOK/SET-BOOK':
      return {
        description: action.book.description,
        author: action.book.authors,
        categories: action.book.categories,
        image: action.book.imageLinks ? action.book.imageLinks.medium : '',
        subTitle: action.book.subtitle,
        title: action.book.title,
      };
    default:
      return state;
  }
};

// TYPE

type ActionsType = ReturnType<typeof setBook>;

interface initState {
  image?: string;
  title?: string;
  subTitle?: string;
  categories?: string[];
  author?: string[];
  description?: string;
}

interface bookType {
  title?: string;
  subtitle?: string;
  categories?: string[];
  authors?: string[];
  imageLinks?: {
    medium: string;
  };
  description?: string;
}

// AC

export const setBook = (book: bookType) =>
  ({
    type: 'CURRENT_BOOK/SET-BOOK',
    book,
  } as const);

// THUNK

export const getBookThunk = (book: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'));
  const result = await api.getBook(book);
  dispatch(setBook(result));
  dispatch(setAppStatus('succeeded'));
};
