import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './components/Home';


const mountApp = document.getElementById('app');
ReactDOM.render(
    //<Provider store = { store } >
    <Home />, mountApp
    //< /Provider>, mountApp
);