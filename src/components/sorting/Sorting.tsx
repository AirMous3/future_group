import React, { ReactElement } from 'react';

import { Select } from 'antd';

import s from './sorting.module.scss';

const { Option } = Select;

interface PropsType {
  onChangeSorting: (value: string) => void;
  sorting: string;
}

export const Sorting = ({ onChangeSorting, sorting }: PropsType): ReactElement => (
  <div className={s.category}>
    <div>sorting by</div>
    <Select onChange={onChangeSorting} value={sorting} className={s.sorting}>
      <Option value="relevance">relevance</Option>
      <Option value="newest">newest</Option>
    </Select>
  </div>
);
