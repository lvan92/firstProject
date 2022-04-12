import { combineReducers } from 'redux';
import loading from './loading';

const appReducer= combineReducers({
    loading
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = {};
    }
    return appReducer(state, action);
};

export default rootReducer;