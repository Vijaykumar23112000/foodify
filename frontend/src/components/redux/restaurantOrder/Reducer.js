import {
    GET_RESTAURANTS_ORDER_FAILED,
    GET_RESTAURANTS_ORDER_REQUEST,
    GET_RESTAURANTS_ORDER_SUCCESS,
    UPDATE_ORDER_STATUS_FAILED,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS
} from "./ActionType";
import { initialState } from "./InitialState";
import {
    handleFailed,
    handleGetRestaurantOrderSuccess,
    handleRequest,
    handleUpdateOrderStatusSuccess
} from "./helper/HelperFunction";

export const restaurantOrderReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_RESTAURANTS_ORDER_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
            return handleRequest(state)

        case GET_RESTAURANTS_ORDER_SUCCESS:
            return handleGetRestaurantOrderSuccess(state, action.payload)

        case UPDATE_ORDER_STATUS_SUCCESS:
            return handleUpdateOrderStatusSuccess(state, action.payload)

        case GET_RESTAURANTS_ORDER_FAILED:
        case UPDATE_ORDER_STATUS_FAILED:
            return handleFailed(state, action.payload)

        default:
            return state

    }
}