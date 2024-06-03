import { 
    CREATE_MENU_ITEM_FAILED,
    CREATE_MENU_ITEM_REQUEST, 
    CREATE_MENU_ITEM_SUCCESS, 
    DELETE_MENU_ITEM_FAILED, 
    DELETE_MENU_ITEM_REQUEST, 
    DELETE_MENU_ITEM_SUCCESS, 
    GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILED, 
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, 
    GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, 
    SEARCH_MENU_ITEM_FAILED, 
    SEARCH_MENU_ITEM_REQUEST, 
    SEARCH_MENU_ITEM_SUCCESS, 
    UPDATE_MENU_ITEMS_AVAILABILITY_FAILED, 
    UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, 
    UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS
} from "./ActionType";
import { initialState } from "./InitialState";
import { 
    handleCreateMenuItemSuccess, 
    handleDeleteMenuItemSuccess, 
    handleFailed, 
    handleGetMenuItemsByRestaurantIdSuccess, 
    handleRequest, 
    handleSearchMenuItemSuccess, 
    handleUpdateMenuItemsAvailability 
} from "./helper/HelperFunction";

export const menuItemReducer = (state = initialState , action) => {
    switch (action.type) {
        
        case CREATE_MENU_ITEM_REQUEST:
        case GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
        case DELETE_MENU_ITEM_REQUEST:
        case SEARCH_MENU_ITEM_REQUEST:
        case UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:
            return handleRequest(state)
        
        case CREATE_MENU_ITEM_SUCCESS:
            return handleCreateMenuItemSuccess(state , action.payload)
        
        case GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
            return handleGetMenuItemsByRestaurantIdSuccess(state , action.payload)

        case DELETE_MENU_ITEM_SUCCESS:
            return handleDeleteMenuItemSuccess(state , action.payload)

        case UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
            return handleUpdateMenuItemsAvailability(state,action.payload)

        case SEARCH_MENU_ITEM_SUCCESS:
            return handleSearchMenuItemSuccess(state,action.payload)

        case CREATE_MENU_ITEM_FAILED:
        case GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILED:
        case DELETE_MENU_ITEM_FAILED:
        case SEARCH_MENU_ITEM_FAILED:
        case UPDATE_MENU_ITEMS_AVAILABILITY_FAILED:
            return handleFailed(state , action.payload)
        
        default:
            state
    }
}