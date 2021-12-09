import React, { ReactElement } from 'react';

import { Select } from 'antd';

import s from './categories.module.scss';

const { Option } = Select;
type PropsType = {
  onChangeCategory: (value: string) => void;
  category: string;
};
export const Categories = ({ onChangeCategory, category }: PropsType): ReactElement => (
  <div className={s.container}>
    <div>categories</div>
    <Select onChange={onChangeCategory} value={category} style={{ width: 130 }}>
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
