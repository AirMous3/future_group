import { BooksType } from '../redux/reducers/foundBooksReducer';

export const extractBookFields = ({
  id,
  volumeInfo: { title, categories, imageLinks, authors, subtitle },
}: BooksType): any => ({
  id,
  categories,
  subTitle: subtitle,
  author: authors,
  image: imageLinks ? imageLinks.thumbnail : '',
  title,
});
