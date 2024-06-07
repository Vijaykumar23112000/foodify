import { initialState } from "./InitialState";
import * as helper from './helper/HelperFunction'
import * as actionTypes from './ActionType'

export const menuItemReducer = (state = initialState , action) => {
    switch (action.type) {
        
        case actionTypes.CREATE_MENU_ITEM_REQUEST:
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
        case actionTypes.DELETE_MENU_ITEM_REQUEST:
        case actionTypes.SEARCH_MENU_ITEM_REQUEST:
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:
            return helper.handleRequest(state)
        
        case actionTypes.CREATE_MENU_ITEM_SUCCESS:
            return helper.handleCreateMenuItemSuccess(state , action.payload)
        
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
            return helper.handleGetMenuItemsByRestaurantIdSuccess(state , action.payload)

        case actionTypes.DELETE_MENU_ITEM_SUCCESS:
            return helper.handleDeleteMenuItemSuccess(state , action.payload)

        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
            return helper.handleUpdateMenuItemsAvailability(state,action.payload)

        case actionTypes.SEARCH_MENU_ITEM_SUCCESS:
            return helper.handleSearchMenuItemSuccess(state,action.payload)

        case actionTypes.CREATE_MENU_ITEM_FAILED:
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILED:
        case actionTypes.DELETE_MENU_ITEM_FAILED:
        case actionTypes.SEARCH_MENU_ITEM_FAILED:
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_FAILED:
            return helper.handleFailed(state , action.payload)
        
        default:
            return state
    }
}