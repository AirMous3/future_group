import { setBook } from '../actions/currentBookActions';

export type ActionsType = ReturnType<typeof setBook>;

export interface initState {
  image?: string;
  title?: string;
  subTitle?: string;
  categories?: string[];
  author?: string[];
  description?: string;
}

export interface currentBookType {
  title?: string;
  subtitle?: string;
  categories?: string[];
  authors?: string[];
  imageLinks?: {
    medium: string;
  };
  description?: string;
}
