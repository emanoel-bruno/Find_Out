import { ActionCreator } from 'redux';
import { ChangeUrlAction } from './types';
import { ApiState } from '../state';

export const updateUser: ActionCreator<ChangeUrlAction> = (
  api: ApiState
): ChangeUrlAction => {
  return {
    type: 'API_CHANGE_URL',
    base: api.base
  };
};
