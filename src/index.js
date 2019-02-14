import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

// #### Redux Logger Middleware
const logger = (store)=> {
    return (next)=> {
        return (action) => {
            // do whatever you have to do
            console.log('[Middleware] Dispatching', action);

            // here we also have access to store
            console.log('[Middleware] prev state', store.getState());

            // call the next step of the redux flow with action as parametter
            // the next function returns the result
            const result = next(action);

            console.log('[Middleware] next state', store.getState());

            return result;
        }
    }
}
// the middle ware above is called like this:
// logger(burgerStore)(next)(insertOrderAction)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(
    applyMiddleware(logger),
    // other middlewares here
)

const store = createStore(reducer, enhancer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
