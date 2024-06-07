import * as actionTypes from "./ActionType";
import { initialState } from "./InitialState";
import * as helper from "./helper/HelperFunction";

export const restaurantOrderReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_RESTAURANTS_ORDER_REQUEST:
        case actionTypes.UPDATE_ORDER_STATUS_REQUEST:
            return helper.handleRequest(state)

        case actionTypes.GET_RESTAURANTS_ORDER_SUCCESS:
            return helper.handleGetRestaurantOrderSuccess(state, action.payload)

        case actionTypes.UPDATE_ORDER_STATUS_SUCCESS:
            return helper.handleUpdateOrderStatusSuccess(state, action.payload)

        case actionTypes.GET_RESTAURANTS_ORDER_FAILED:
        case actionTypes.UPDATE_ORDER_STATUS_FAILED:
            return helper.handleFailed(state, action.payload)

        default:
            return state

    }
}