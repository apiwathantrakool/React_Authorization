import { combineReducers } from 'redux';
import TestReducer from "./test";
import UserReducer from "./user";

export default combineReducers({
    testReducer: TestReducer,
    userReducer: UserReducer
});