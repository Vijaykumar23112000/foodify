import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authenticationReducer } from "../authentication/Reducer";
import { thunk } from "redux-thunk";
import { restaurantReducer } from "../restaurant/Reducer";
import { menuItemReducer } from "../menu/Reducer";

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer
})

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk))