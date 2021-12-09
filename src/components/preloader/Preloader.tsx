import { ReactElement } from 'react';

import Spinner from '../../features/spinner/tail-spin.svg';

import s from './preloader.module.scss';

export const Preloader = (): ReactElement => (
  <div className={s.spinner}>
    <img alt="Preloader" src={Spinner} />
    <div>loading...</div>
  </div>
);
