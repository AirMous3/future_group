import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getBookThunk } from '../../redux/currentBookReducer';
import { AppRootStateType } from '../../redux/store';

import s from './bookInfo.module.css';

export const BookInfo = (): ReactElement => {
  const dispatch = useDispatch();

  const bookID = useParams();

  const book = useSelector((state: AppRootStateType) => state.currentBook);

  useEffect(() => {
    dispatch(getBookThunk(bookID['*']!));
  }, []);

  return (
    <div className={s.container}>
      <div className={s.bookImage}>
        <img src={book.image} alt="bookImage" />
      </div>

      <div className={s.bookDescription}>
        <div>
          categories:
          {book.categories?.map(b => (
            <p key={b}>{b}</p>
          ))}
        </div>
        <div>title:{book.title}</div>
        <div>author:{book.author}</div>
        <textarea disabled value={book.description} />
      </div>
    </div>
  );
};
