import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { foundBooksReducer } from './foundBooksReducer';

const RootReducer = combineReducers({
  foundBooks: foundBooksReducer,
});

export const store = createStore(RootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof RootReducer>;
