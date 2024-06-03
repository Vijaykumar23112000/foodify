import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authenticationReducer } from "../authentication/Reducer";
import { thunk } from "redux-thunk";
import { restaurantReducer } from "../restaurant/Reducer";

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    restaurant: restaurantReducer,
})

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk))