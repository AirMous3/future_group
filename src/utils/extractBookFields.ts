import { foundBooksType } from '../redux/reducers/foundBooksReducer/types';

export const extractBookFields = ({
  id,
  volumeInfo: { title, categories, imageLinks, authors, subtitle },
}: foundBooksType): any => ({
  id,
  categories,
  subTitle: subtitle,
  author: authors,
  image: imageLinks ? imageLinks.thumbnail : '',
  title,
});
