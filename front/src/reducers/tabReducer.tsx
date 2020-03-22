import { Reducer } from 'redux';
import { TabState, tabInitial } from '../state';
import { TabAction } from '../actions/types';

const tabReducer: Reducer<TabState, TabAction> = (
  state: TabState = tabInitial,
  action: TabAction
) => {
  switch (action.type) {
    case 'TAB_CHANGE':
      return {
        ...state,
        tab: action.tab
      };
    default:
      return state;
  }
};

export default tabReducer;
