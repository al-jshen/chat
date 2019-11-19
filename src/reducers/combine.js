import usernameReducer from './username';
import loggedReducer from './islogged';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    user: usernameReducer,
    islogged: loggedReducer,
});

export default rootReducers;