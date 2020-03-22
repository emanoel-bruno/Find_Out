export interface MainState {
  name: string;
  theme: string;
}

export interface UserState {
  authToken: string;
  name: string;
}

export interface ApiState {
  base: string;
  setUser: string;
}

export interface TabState {
  tab: string;
  route: string;
}

export interface AppState {
  api: ApiState;
  main: MainState;
  tab: TabState;
  user: UserState;
}

export const apiInitial: ApiState = {
  base: 'http://localhost:80',
  setUser: '/register'
};

export const mainInitial: MainState = {
  name: 'Find Out',
  theme: 'light'
};

export const tabInitial: TabState = {
  tab: '',
  route: 'HOME'
};

export const userInitial: UserState = {
  name: '',
  authToken: ''
};

const defaultState: AppState = {
  api: apiInitial,
  main: mainInitial,
  tab: tabInitial,
  user: userInitial
};

export default defaultState;
