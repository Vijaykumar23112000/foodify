import { 
    GET_USERS_ORDERS_FAILED, 
    GET_USERS_ORDERS_REQUEST, 
    GET_USERS_ORDERS_SUCCESS 
} from "./ActionType";
import { initialState } from "./InitialState";
import {
    handleFailed,
    handleGetUsersOrderSuccess, 
    handleRequest 
} from "./helper/HelperFunction";

export const orderReducer = (state = initialState , action) => {
    switch(action.type){

        case GET_USERS_ORDERS_REQUEST:
            return handleRequest(state)

        case GET_USERS_ORDERS_SUCCESS:
            return handleGetUsersOrderSuccess(state , action.payload)

        case GET_USERS_ORDERS_FAILED:
            return handleFailed(state , action.payload)

        default: 
            return state

    }
}