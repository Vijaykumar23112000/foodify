import { LOGOUT } from "../authentication/ActionType";
import { initialState } from "./InitialState";
import * as actionTypes from './ActionType'
import * as helper from './helper/HelperFunction'

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FIND_CART_REQUEST:
        case actionTypes.GET_ALL_CART_ITEMS_REQUEST:
        case actionTypes.UPDATE_CART_ITEM_REQUEST:
        case actionTypes.REMOVE_CART_ITEM_REQUEST:
            return helper.handleRequest(state)

        case actionTypes.FIND_CART_SUCCESS:
        case actionTypes.CLEAR_CART_SUCCESS:
            return helper.handleFindCartAndClearCartSuccess(state, action.payload)

        case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
            return helper.handleAddItemToCartSuccess(state, action.payload)

        case actionTypes.UPDATE_CART_ITEM_SUCCESS:
            return helper.handleUpdateCartItemSuccess(state, action.payload)

        case actionTypes.REMOVE_CART_ITEM_SUCCESS:
            return helper.handleRemoveCartItemSuccess(state, action.payload)

        case actionTypes.FIND_CART_FAILED:
        case actionTypes.UPDATE_CART_ITEM_FAILED:
        case actionTypes.REMOVE_CART_ITEM_FAILED:
        case actionTypes.GET_ALL_CART_ITEMS_FAILED:
            return helper.handleFailed(state, action.payload)

        case LOGOUT:
            return helper.handleLogout(state)

        default:
            return state

    }
}