import { Reducer } from 'redux';
import { UserState, userInitial } from '../state';
import { UserAction } from '../actions/types';

const userReducer: Reducer<UserState, UserAction> = (
  state: UserState = userInitial,
  action: UserAction
) => {
  switch (action.type) {
    case 'USER_UPDATE_ALL':
      return {
        ...state,
        name: action.user.name,
        authToken: action.user.authToken
      };
    default:
      return state;
  }
};

export default userReducer;
