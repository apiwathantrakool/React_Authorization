import { combineReducers } from 'redux';
import TestReducer from "./test";

export default combineReducers({
    testReducer: TestReducer,
});