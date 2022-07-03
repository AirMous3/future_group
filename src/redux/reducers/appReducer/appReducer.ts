import { ActionsType, initState } from './types';

const initialState: initState = {
  status: 'idle',
};
export const appReducer = (state = initialState, action: ActionsType): initState => {
  switch (action.type) {
    case 'APP_REDUCER/CHANGE-STATUS':
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
