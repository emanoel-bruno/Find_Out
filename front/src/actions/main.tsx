import { ActionCreator } from 'redux';
import { ChangeThemeAction } from './types';
import { MainState } from '../state';

export const updateUser: ActionCreator<ChangeThemeAction> = (
  main: MainState
): ChangeThemeAction => {
  return {
    type: 'MAIN_CHANGE_THEME',
    theme: main.theme
  };
};
