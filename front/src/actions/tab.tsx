import { ActionCreator } from 'redux';
import { ChangeTabAction } from './types';
import { TabState } from '../state';

export const updateTab: ActionCreator<ChangeTabAction> = (
  tab: string
): ChangeTabAction => {
  return {
    type: 'TAB_CHANGE',
    tab: tab
  };
};
