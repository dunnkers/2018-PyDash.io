import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

// redux
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import * as reducers from './reducers'

const reducer = combineReducers(Object.assign({}, reducers, {}))

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" />
    </DockMonitor>
)

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunkMiddleware),
    DevTools.instrument()
)

const store = createStore(reducer, enhancer)

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
