import { initialState } from "./InitialState";
import * as helper from "./helper/HelperFunction";
import * as actionTypes from './ActionType'

export const orderReducer = (state = initialState , action) => {
    switch(action.type){

        case actionTypes.GET_USERS_ORDERS_REQUEST:
            return helper.handleRequest(state)

        case actionTypes.GET_USERS_ORDERS_SUCCESS:
            return helper.handleGetUsersOrderSuccess(state , action.payload)

        case actionTypes.GET_USERS_ORDERS_FAILED:
            return helper.handleFailed(state , action.payload)

        default: 
            return state

    }
}