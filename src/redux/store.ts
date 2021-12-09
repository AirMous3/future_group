import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './reducers/appReducer/appReducer';
import { currentBookReducer } from './reducers/currentBookReducer/currentBookReducer';
import { foundBooksReducer } from './reducers/foundBooksReducer/foundBooksReducer';

const RootReducer = combineReducers({
  foundBooks: foundBooksReducer,
  currentBook: currentBookReducer,
  app: appReducer,
});

export const store = createStore(RootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof RootReducer>;
