import { loadMore, setBooks } from '../actions/foundBooksActions';

export interface initState {
  totalItems: number;
  booksInfo: foundBookType[];
}

export interface foundBookType {
  id: string;
  image?: string;
  title?: string;
  subTitle?: string;
  categories?: string[];
  author?: string[];
}

export interface foundBooksType {
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

export type ActionsType = ReturnType<typeof setBooks> | ReturnType<typeof loadMore>;
