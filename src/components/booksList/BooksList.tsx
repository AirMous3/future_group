import React, { ReactElement } from 'react';

import { useDispatch } from 'react-redux';

import { RequestStatusType } from '../../redux/reducers/appReducer/types';
import { loadMoreThunk } from '../../redux/reducers/foundBooksReducer/middleware/foundBooksThunks';
import { foundBookType } from '../../redux/reducers/foundBooksReducer/types';
import { BookCard } from '../bookCard/BookCard';

import s from './booksList.module.scss';

interface PropsType {
  totalItems: number;
  loadStatus: RequestStatusType;
  maxResults: number;
  book: string;
  category: string;
  startIndex: number;
  sorting: string;
  books: foundBookType[];
}

const FIRST_CATEGORIES_ITEM = 0;

export const BooksList = ({
  totalItems,
  loadStatus,
  maxResults,
  book,
  startIndex,
  category,
  sorting,
  books,
}: PropsType): ReactElement => {
  const dispatch = useDispatch();
  const loadMore = (): void => {
    dispatch(loadMoreThunk(book, category, sorting, startIndex, maxResults));
  };

  return (
    <div>
      <div className={s.founds}>Found {totalItems} results</div>
      <div className={s.cardWrapper}>
        {books.map(({ id, categories, title, image, author }) => (
          <BookCard
            key={id}
            id={id}
            title={title}
            image={image}
            author={author}
            categories={categories ? categories[FIRST_CATEGORIES_ITEM] : ''}
          />
        ))}
      </div>
      {books.length < totalItems ? (
        <button
          className={s.button}
          disabled={loadStatus === 'disable'}
          type="button"
          onClick={loadMore}
        >
          load More
        </button>
      ) : null}
    </div>
  );
};
