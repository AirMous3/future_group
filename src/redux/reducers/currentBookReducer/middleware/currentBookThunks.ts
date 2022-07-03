import { Dispatch } from 'redux';

import { api } from '../../../../api/api';
import { setAppStatus } from '../../appReducer/actions/appActions';
import { setBook } from '../actions/currentBookActions';

export const getBookThunk = (book: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'));
  const result = await api.getBook(book);
  dispatch(setBook(result));
  dispatch(setAppStatus('succeeded'));
};
