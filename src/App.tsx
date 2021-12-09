import React, { ReactElement } from 'react';

import { Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import 'antd/dist/antd.css';
import s from './app.module.scss';
import { BookCard } from './components/bookCard/BookCard';
import { getBooksThunk } from './redux/foundBooksReducer';
import { AppRootStateType } from './redux/store';

const { Search } = Input;
const { Option } = Select;

const FIRST_CATEGORIES_ITEM = 0;

export const App = (): ReactElement => {
  const dispatch = useDispatch();
  const books = useSelector((state: AppRootStateType) => state.foundBooks.booksInfo);
  const totalItems = useSelector(
    (state: AppRootStateType) => state.foundBooks.totalItems,
  );
  const onSearch = (value: string): void => {
    dispatch(getBooksThunk(value));
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
            <Select defaultValue="all" style={{ width: 130 }}>
              <Option value="all">all</Option>
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
            <Select value="relevance" style={{ width: 130 }}>
              <Option value="relevance">relevance</Option>
              <Option value="newest">newest</Option>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <div>Found {totalItems} results</div>
        <div className={s.cardWrapper}>
          {books.map(({ id, categories, title, subTitle, image, author }) => (
            <BookCard
              key={id}
              title={title}
              image={image}
              author={author}
              categories={categories ? categories[FIRST_CATEGORIES_ITEM] : ''}
              subTitle={subTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
