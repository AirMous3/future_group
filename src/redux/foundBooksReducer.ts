import { Dispatch } from 'redux';

import { api } from '../api/api';

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
        booksInfo: action.books.map(
          ({ id, volumeInfo: { title, categories, imageLinks, authors, subtitle } }) => ({
            id,
            author: authors,
            image: imageLinks ? imageLinks.thumbnail : '',
            title,
            categories,
            subTitle: subtitle,
          }),
        ),
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

type ActionsType = ReturnType<typeof setBooks>;

// AC
export const setBooks = (
  totalItems: number,
  books: {
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
  }[],
) => ({ type: 'FOUND_BOOKS/SET-BOOKS', books, totalItems } as const);

// THUNK

export const getBooksThunk =
  (book: string, category: string, sorting: string) => async (dispatch: Dispatch) => {
    const result = await api.getBooks(book, category, sorting);
    const { totalItems } = result;
    const books = result.items?.map(item => ({
      id: item.id,
      volumeInfo: item.volumeInfo,
    }));
    dispatch(setBooks(totalItems, books || []));
  };
