import { ActionCreator } from 'redux';
import { UpdateUserAction } from './types';
import { UserState } from '../state';

export const updateUser: ActionCreator<UpdateUserAction> = (
  user: UserState
): UpdateUserAction => {
  return {
    type: 'USER_UPDATE_ALL',
    user: user
  };
};
