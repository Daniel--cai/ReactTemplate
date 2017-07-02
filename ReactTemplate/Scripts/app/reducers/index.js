"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var initialState = [];
function state(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "ADD": {
            console.log('action:', action.type);
            return state.concat([action.payload]);
        }
        default:
            return state;
    }
    ;
}
;
var App = redux_1.combineReducers({
    state: state,
});
exports.default = App;
//# sourceMappingURL=index.js.map