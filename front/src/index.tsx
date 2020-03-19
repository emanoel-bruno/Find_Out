import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import App from './components/App'
import defaultState from './state'
import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import rootReducer from './reducers/rootReducer'

import './common.scss'
import './index.scss'

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers: any = compose(
  middlewareEnhancer,
  monitorReducerEnhancer
)

const store = createStore(rootReducer, defaultState, composedEnhancers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
