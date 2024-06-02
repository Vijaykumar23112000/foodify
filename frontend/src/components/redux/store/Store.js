import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authenticationReducer } from "../authentication/Reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    authentication: authenticationReducer,
})

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk))