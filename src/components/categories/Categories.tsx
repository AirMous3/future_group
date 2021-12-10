import React, { ReactElement } from 'react';

import { Select } from 'antd';

import s from './categories.module.scss';

const { Option } = Select;

interface PropsType {
  onChangeCategory: (value: string) => void;
  category: string;
}
export const Categories = ({ onChangeCategory, category }: PropsType): ReactElement => (
  <div className={s.categories}>
    <div>categories</div>
    <Select onChange={onChangeCategory} value={category} className={s.select}>
      <Option value="">all</Option>
      <Option value="art">art</Option>
      <Option value="biography">biography</Option>
      <Option value="computers">computers</Option>
      <Option value="history">history</Option>
      <Option value="medical">medical</Option>
      <Option value="poetry">poetry</Option>
    </Select>
  </div>
);
