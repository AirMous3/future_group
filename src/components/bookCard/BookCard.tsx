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
    <div className={s.container}>
      <NavLink to={`bookInfo/${id}`}>
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
      </NavLink>
    </div>
  );
};
