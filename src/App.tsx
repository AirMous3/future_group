import React, { ReactElement, useState } from 'react';

import 'antd/dist/antd.css';
import { Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import s from './app.module.scss';
import { BookCard } from './components/bookCard/BookCard';
import { BookInfo } from './components/bookInfo/BookInfo';
import { getBooksThunk, loadMoreThunk } from './redux/foundBooksReducer';
import { AppRootStateType } from './redux/store';

const { Search } = Input;
const { Option } = Select;

const FIRST_CATEGORIES_ITEM = 0;
const BOOKS_PER_PAGE = 30;

export const App = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const books = useSelector((state: AppRootStateType) => state.foundBooks.booksInfo);
  const totalItems = useSelector(
    (state: AppRootStateType) => state.foundBooks.totalItems,
  );

  const [sorting, setSorting] = useState('relevance');
  const [category, setCategory] = useState('');
  const [book, setBook] = useState('');

  const startIndex = books.length;
  const maxResults = Math.min(BOOKS_PER_PAGE, totalItems - startIndex);

  const onSearch = (bookToSearch: string): void => {
    navigate('/');
    setBook(bookToSearch);
    dispatch(getBooksThunk(bookToSearch, category, sorting, startIndex, BOOKS_PER_PAGE));
  };

  const loadMore = (): void => {
    dispatch(loadMoreThunk(book, category, sorting, startIndex, maxResults));
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
          <div className={s.categories}>
            <div>categories</div>
            <Select onChange={setCategory} value={category} style={{ width: 130 }}>
              <Option value="">all</Option>
              <Option value="art">art</Option>
              <Option value="biography">biography</Option>
              <Option value="computers">computers</Option>
              <Option value="history">history</Option>
              <Option value="medical">medical</Option>
              <Option value="poetry">poetry</Option>
            </Select>
          </div>
          <div className={s.categories}>
            <div>sorting by</div>
            <Select onChange={setSorting} value={sorting} style={{ width: 130 }}>
              <Option value="relevance">relevance</Option>
              <Option value="newest">newest</Option>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div>Found {totalItems} results</div>
                <div className={s.cardWrapper}>
                  {books.map(({ id, categories, title, subTitle, image, author }) => (
                    <BookCard
                      key={id}
                      id={id}
                      title={title}
                      image={image}
                      author={author}
                      categories={categories ? categories[FIRST_CATEGORIES_ITEM] : ''}
                      subTitle={subTitle}
                    />
                  ))}
                </div>
                {books.length < totalItems ? (
                  <button type="button" onClick={loadMore}>
                    load More
                  </button>
                ) : null}
              </div>
            }
          />
          <Route path="bookInfo/*" element={<BookInfo />} />
        </Routes>
      </div>
    </div>
  );
};
