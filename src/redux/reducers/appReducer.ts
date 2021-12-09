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

// TYPE
type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed' | 'disable';

type ActionsType = ReturnType<typeof setAppStatus>;

interface initState {
  status: RequestStatusType;
}

// AC

export const setAppStatus = (status: RequestStatusType) =>
  ({
    type: 'APP_REDUCER/CHANGE-STATUS',
    status,
  } as const);
