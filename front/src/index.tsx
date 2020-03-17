import './index.scss'
import * as React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Configuration } from 'react-md'
import { createStore, applyMiddleware, compose  } from 'redux'
import thunkMiddleware  from 'redux-thunk'

import rootReducer from './reducers/rootReducer'
import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'

import App from './components/App'
import defaultState from './state'

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware );
const composedEnhancers:any = compose(middlewareEnhancer, monitorReducerEnhancer);

const store = createStore(rootReducer, defaultState, composedEnhancers);

ReactDOM.render( 
    <Configuration>
        <Provider store={store}>
            <App/>
        </Provider>
    </Configuration>
    ,document.getElementById('root')
);