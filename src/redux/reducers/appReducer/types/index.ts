import { setAppStatus } from '../actions/appActions';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed' | 'disable';

export type ActionsType = ReturnType<typeof setAppStatus>;

export interface initState {
  status: RequestStatusType;
}
