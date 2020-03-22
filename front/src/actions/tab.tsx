import { ActionCreator } from 'redux';
import { ChangeTabAction } from './types';
import { TabState } from '../state';

export const updateUser: ActionCreator<ChangeTabAction> = (
  tab: TabState
): ChangeTabAction => {
  return {
    type: 'TAB_CHANGE',
    tab: tab.tab
  };
};
