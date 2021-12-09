import React, { ReactElement, useState } from 'react';

import 'antd/dist/antd.css';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import s from './app.module.scss';
import { BookInfo } from './components/bookInfo/BookInfo';
import { BooksList } from './components/booksList/BooksList';
import { Categories } from './components/categories/Categories';
import { Preloader } from './components/preloader/Preloader';
import { Sorting } from './components/sorting/Sorting';
import { getBooksThunk } from './redux/reducers/foundBooksReducer/middleware/foundBooksThunks';
import { AppRootStateType } from './redux/store';

const { Search } = Input;

const BOOKS_PER_PAGE = 30;
const START_INDEX_TO_FIRST_SEARCH = 0;

export const App = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const books = useSelector((state: AppRootStateType) => state.foundBooks.booksInfo);
  const totalItems = useSelector(
    (state: AppRootStateType) => state.foundBooks.totalItems,
  );
  const loadStatus = useSelector((state: AppRootStateType) => state.app.status);

  const [sorting, setSorting] = useState('relevance');
  const [category, setCategory] = useState('');
  const [book, setBook] = useState('');

  const startIndex = books.length;
  const maxResults = Math.min(BOOKS_PER_PAGE, totalItems - startIndex);

  const onSearch = (bookToSearch: string): void => {
    navigate('/');
    setBook(bookToSearch);
    dispatch(
      getBooksThunk(
        bookToSearch,
        category,
        sorting,
        START_INDEX_TO_FIRST_SEARCH,
        BOOKS_PER_PAGE,
      ),
    );
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Search for books</h1>

        <Search
          onSearch={onSearch}
          placeholder="input search text"
          allowClear
          style={{ width: 500 }}
        />

        <div className={s.categoriesWrapper}>
          <Categories onChangeCategory={setCategory} category={category} />

          <Sorting onChangeSorting={setSorting} sorting={sorting} />
        </div>
      </div>

      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {loadStatus === 'loading' ? (
                  <Preloader />
                ) : (
                  <BooksList
                    books={books}
                    sorting={sorting}
                    category={category}
                    startIndex={startIndex}
                    totalItems={totalItems}
                    loadStatus={loadStatus}
                    maxResults={maxResults}
                    book={book}
                  />
                )}
              </div>
            }
          />
          <Route path="bookInfo/*" element={<BookInfo />} />
        </Routes>
      </div>
    </div>
  );
};
