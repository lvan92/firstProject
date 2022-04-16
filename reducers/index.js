import { combineReducers } from 'redux';
import loading from './loading';
import user from './user';

const appReducer= combineReducers({
    loading,
    user
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = {};
    }
    return appReducer(state, action);
};

export default rootReducer;