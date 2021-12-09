import React, { ReactElement, useState } from 'react';

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

  const [sorting, setSorting] = useState('relevance');
  const [category, setCategory] = useState('');

  const onSearch = (book: string): void => {
    dispatch(getBooksThunk(book, category, sorting));
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
