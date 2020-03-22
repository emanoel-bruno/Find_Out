import { Reducer } from 'redux';
import { MainState, mainInitial } from '../state';
import { MainAction } from '../actions/types';

const mainReducer: Reducer<MainState, MainAction> = (
  state: MainState = mainInitial,
  action: MainAction
) => {
  switch (action.type) {
    case 'MAIN_CHANGE_THEME':
      return {
        ...state,
        theme: action.theme
      };
    default:
      return state;
  }
};

export default mainReducer;
