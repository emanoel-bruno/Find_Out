import { Action } from 'redux';
import { UserState } from '../state';
export interface UpdateUserAction extends Action {
  type: 'USER_UPDATE_ALL';
  user: UserState;
}

export type UserAction = UpdateUserAction;

// ----------------------------------------------

export interface ChangeTabAction extends Action {
  type: 'TAB_CHANGE';
  tab: string;
}

export type TabAction = ChangeTabAction;

// ----------------------------------------------

export interface ChangeUrlAction extends Action {
  type: 'API_CHANGE_URL';
  base: string;
}

export type ApiAction = ChangeUrlAction;

// ----------------------------------------------

export interface ChangeThemeAction extends Action {
  type: 'MAIN_CHANGE_THEME';
  theme: string;
}

export type MainAction = ChangeThemeAction;
