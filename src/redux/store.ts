import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './reducers/appReducer';
import { currentBookReducer } from './reducers/currentBookReducer';
import { foundBooksReducer } from './reducers/foundBooksReducer';

const RootReducer = combineReducers({
  foundBooks: foundBooksReducer,
  currentBook: currentBookReducer,
  app: appReducer,
});

export const store = createStore(RootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof RootReducer>;
