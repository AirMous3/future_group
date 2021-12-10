import { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import s from './bookCard.module.scss';

interface Props {
  id: string;
  image?: string;
  title?: string;
  subTitle?: string;
  categories?: string;
  author?: string[];
}

export const BookCard = ({
  id,
  categories,
  subTitle,
  title,
  author,
  image,
}: Props): ReactElement => {
  let authors;
  if (author) {
    authors = author.join(' / ');
  }
  return (
    <div className={s.card}>
      <NavLink to={`bookInfo/${id}`}>
        <img src={image} alt="bookImage" />
        <div className={s.description}>
          <div className={s.categories}>{categories}</div>
          <div className={s.title}>
            {title}.{subTitle}
          </div>
          <div className={s.author}>{authors}</div>
        </div>
      </NavLink>
    </div>
  );
};
