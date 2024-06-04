import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authenticationReducer } from "../authentication/Reducer";
import { thunk } from "redux-thunk";
import { restaurantReducer } from "../restaurant/Reducer";
import { menuItemReducer } from "../menu/Reducer";
import { cartReducer } from "../cart/Reducer";
import { orderReducer } from "../order/Reducer";
import { restaurantOrderReducer } from "../restaurantOrder/Reducer";

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    restaurantOrder: restaurantOrderReducer
})

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk))