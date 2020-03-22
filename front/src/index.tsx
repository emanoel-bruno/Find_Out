import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  compose,
  createStore,
  combineReducers,
  Reducer,
  Dispatch
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import defaultState, { AppState } from './state';
import userReducer from './reducers/userReducer';
import apiReducer from './reducers/apiReducer';
import mainReducer from './reducers/mainReducer';
import tabReducer from './reducers/tabReducer';

import App from './components/app';
import './common.scss';
import './index.scss';

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
    <App base={defaultState.api.base} />
  </Provider>,
  document.getElementById('root')
);
