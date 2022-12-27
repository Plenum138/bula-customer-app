import authReducer from './authSlice';

import { combineReducers } from 'redux';
export default combineReducers({
    auth: authReducer,
});


