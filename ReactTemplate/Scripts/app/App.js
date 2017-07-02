"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Home_1 = require("./components/Home");
var mountApp = document.getElementById('app');
ReactDOM.render(
//<Provider store = { store } >
React.createElement(Home_1.default, null), mountApp
//< /Provider>, mountApp
);
//# sourceMappingURL=App.js.map