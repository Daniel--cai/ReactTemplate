import { combineReducers } from 'redux';

var initialState: Array<string> = [];

function state(state = initialState, action: Action) {
    switch (action.type) {
        case "ADD": {
            console.log('action:', action.type);
            return  [...state, action.payload]
        }
        default:
            return state
    };
};

const App = combineReducers({
    state,
})
export default App;