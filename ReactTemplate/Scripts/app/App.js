"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Home_1 = require("./components/Home");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var reducers_1 = require("./reducers");
var actions_1 = require("./actions");
var store = redux_1.createStore(reducers_1.default);
console.log(redux_1.createStore);
var mountApp = document.getElementById('app');
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(Home_1.default, null),
    ", mountApp"), mountApp);
store.dispatch(actions_1.add('Read the docs'));
//# sourceMappingURL=App.js.map