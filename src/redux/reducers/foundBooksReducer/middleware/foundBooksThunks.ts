import { Dispatch } from 'redux';

import { api } from '../../../../api/api';
import { setAppStatus } from '../../appReducer/actions/appActions';
import { loadMore, setBooks } from '../actions/foundBooksActions';

export const getBooksThunk =
  (book: string, category: string, sorting: string, index: number, maxResults: number) =>
  async (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'));

    const result = await api.getBooks(book, category, sorting, index, maxResults);

    const { totalItems } = result;

    const books = result.items?.map(item => ({
      id: item.id,
      volumeInfo: item.volumeInfo,
    }));
    dispatch(setAppStatus('succeeded'));

    dispatch(setBooks(totalItems, books || []));
  };

export const loadMoreThunk =
  (book: string, category: string, sorting: string, index: number, maxResults: number) =>
  async (dispatch: Dispatch) => {
    dispatch(setAppStatus('disable'));
    const result = await api.getBooks(book, category, sorting, index, maxResults);
    const { totalItems } = result;
    const books = result.items?.map(item => ({
      id: item.id,
      volumeInfo: item.volumeInfo,
    }));
    dispatch(loadMore(totalItems, books || []));
    dispatch(setAppStatus('succeeded'));
  };
