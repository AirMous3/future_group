import { RequestStatusType } from '../types';

export const setAppStatus = (status: RequestStatusType) =>
  ({
    type: 'APP_REDUCER/CHANGE-STATUS',
    status,
  } as const);
