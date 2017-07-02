import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './components/Home';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import { add } from './actions'

const store = createStore(reducer);

const mountApp = document.getElementById('app');

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
                <Component />
        </Provider>, mountApp

    );
};
render(Home)
store.dispatch(add('Read the docs'))