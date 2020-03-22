import { Reducer } from 'redux';
import { ApiState, apiInitial } from '../state';
import { ApiAction } from '../actions/types';

const apiReducer: Reducer<ApiState, ApiAction> = (
  state: ApiState = apiInitial,
  action: ApiAction
) => {
  switch (action.type) {
    case 'API_CHANGE_URL':
      return {
        ...state,
        base: action.base
      };
    default:
      return state;
  }
};

export default apiReducer;
