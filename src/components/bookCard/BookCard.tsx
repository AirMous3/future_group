import { ReactElement } from 'react';

import s from './bookCard.module.scss';

interface Props {
  image?: string;
  title?: string;
  subTitle?: string;
  categories?: string;
  author?: string[];
}

export const BookCard = ({
  categories,
  subTitle,
  title,
  author,
  image,
}: Props): ReactElement => {
  let authors;
  if (author) {
    authors = author.join(' ');
  }
  return (
    <div className={s.container}>
      <img src={image} alt="bookImage" />
      <div className="description">
        <div>categories:{categories}</div>
        <div>
          title:
          {title}
          {subTitle}
        </div>
        <div>author:{authors}</div>
      </div>
    </div>
  );
};
