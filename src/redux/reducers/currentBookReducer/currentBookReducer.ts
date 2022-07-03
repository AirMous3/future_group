import { ActionsType, initState } from './types';

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
