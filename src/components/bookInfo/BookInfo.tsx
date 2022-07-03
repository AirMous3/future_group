import { ReactElement, useLayoutEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getBookThunk } from '../../redux/reducers/currentBookReducer/middleware/currentBookThunks';
import { AppRootStateType } from '../../redux/store';
import { Preloader } from '../preloader/Preloader';

import s from './bookInfo.module.scss';

export const BookInfo = (): ReactElement => {
  const dispatch = useDispatch();

  const bookID = useParams();

  const book = useSelector((state: AppRootStateType) => state.currentBook);
  const loadStatus = useSelector((state: AppRootStateType) => state.app.status);

  useLayoutEffect(() => {
    dispatch(getBookThunk(bookID['*']!));
  }, []);

  const parseBookDescription = (): any => ({ __html: book.description });

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
              {book.categories?.map(b => (
                <span className={s.categories} key={b}>
                  {b}
                </span>
              ))}
            </div>
            <div>
              {book.title}
              {book.subTitle}
            </div>
            <div className={s.author}>
              {book.author?.map(author => (
                <span key={author}>{author} </span>
              ))}
            </div>
            <p
              className={s.descriptionContainer}
              dangerouslySetInnerHTML={parseBookDescription()}
            />
          </div>
        </div>
      )}
    </div>
  );
};
