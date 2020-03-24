import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  compose,
  createStore,
  combineReducers,
  Reducer
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import defaultState, { AppState } from './state';
import userReducer from './reducers/userReducer';
import apiReducer from './reducers/apiReducer';
import mainReducer from './reducers/mainReducer';
import tabReducer from './reducers/tabReducer';
import { Configuration, Layout, useLayoutNavigation } from '@react-md/layout';
import Notifications from 'react-notify-toast';

import App from './components/app';
import './common.scss';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

const reducers: Reducer<AppState> = combineReducers<AppState>({
  user: userReducer,
  tab: tabReducer,
  api: apiReducer,
  main: mainReducer
});

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers: any = compose(
  middlewareEnhancer,
  monitorReducerEnhancer
);
const store = createStore(reducers, defaultState, composedEnhancers);
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
      <Configuration>
      <Notifications />
        <App />
    </Configuration>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
