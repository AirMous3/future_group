import { ReactElement, useLayoutEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getBookThunk } from '../../redux/reducers/currentBookReducer';
import { AppRootStateType } from '../../redux/store';
import { Preloader } from '../preloader/Preloader';

import s from './bookInfo.module.css';

export const BookInfo = (): ReactElement => {
  const dispatch = useDispatch();

  const bookID = useParams();

  const book = useSelector((state: AppRootStateType) => state.currentBook);
  const loadStatus = useSelector((state: AppRootStateType) => state.app.status);

  useLayoutEffect(() => {
    dispatch(getBookThunk(bookID['*']!));
  }, []);

  return (
    <div>
      {loadStatus === 'loading' ? (
        <Preloader />
      ) : (
        <div className={s.container}>
          <div className={s.bookImage}>
            <img src={book.image} alt="bookImage" />
          </div>

          <div className={s.bookDescription}>
            <div>
              categories:
              {book.categories?.map(b => (
                <span key={b}>{b}</span>
              ))}
            </div>
            <div>
              title:{book.title}
              {book.subTitle}
            </div>
            <div>author:{book.author}</div>
            <textarea disabled value={book.description} />
          </div>
        </div>
      )}
    </div>
  );
};
