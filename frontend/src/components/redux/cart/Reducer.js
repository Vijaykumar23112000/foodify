import { LOGOUT } from "../authentication/ActionType";
import { 
    ADD_ITEM_TO_CART_SUCCESS, 
    CLEAR_CART_SUCCESS, 
    FIND_CART_FAILED, 
    FIND_CART_REQUEST, 
    FIND_CART_SUCCESS, 
    GET_ALL_CART_ITEMS_FAILED,
    GET_ALL_CART_ITEMS_REQUEST, 
    REMOVE_CART_ITEM_FAILED, 
    REMOVE_CART_ITEM_REQUEST, 
    REMOVE_CART_ITEM_SUCCESS, 
    UPDATE_CART_ITEM_FAILED, 
    UPDATE_CART_ITEM_REQUEST, 
    UPDATE_CART_ITEM_SUCCESS 
} from "./ActionType";
import { initialState } from "./InitialState";
import { 
    handleAddItemToCartSuccess, 
    handleFailed, 
    handleFindCartAndClearCartSuccess, 
    handleLogout, 
    handleRemoveCartItemSuccess, 
    handleRequest, 
    handleUpdateCartItemSuccess 
} from "./helper/HelperFunction";

export const cartReducer = (state = initialState , action) => {
    switch(action.type){

        case FIND_CART_REQUEST:
        case GET_ALL_CART_ITEMS_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
        case REMOVE_CART_ITEM_REQUEST:
            return handleRequest(state)

        case FIND_CART_SUCCESS:
        case CLEAR_CART_SUCCESS:
            return handleFindCartAndClearCartSuccess(state , action.payload)
        
        case ADD_ITEM_TO_CART_SUCCESS:
            return handleAddItemToCartSuccess(state , action.payload)

        case UPDATE_CART_ITEM_SUCCESS:
            return handleUpdateCartItemSuccess(state,action.payload)

        case REMOVE_CART_ITEM_SUCCESS:
            return handleRemoveCartItemSuccess(stateaction.payload)

        case FIND_CART_FAILED:
        case UPDATE_CART_ITEM_FAILED:
        case REMOVE_CART_ITEM_FAILED:
        case GET_ALL_CART_ITEMS_FAILED:
            return handleFailed(state , action.payload)

        case LOGOUT:
            return handleLogout(state)
        
        default:
            return state

    }
}