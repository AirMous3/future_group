import React, { ReactElement } from 'react';

import { Input, Select } from 'antd';

import s from './app.module.scss';

import 'antd/dist/antd.css';

const { Search } = Input;
const { Option } = Select;

export const App = (): ReactElement => (
  <div className={s.container}>
    <div className={s.header}>
      <h1>Search for books</h1>
      <Search placeholder="input search text" allowClear style={{ width: 500 }} />
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
  </div>
);
