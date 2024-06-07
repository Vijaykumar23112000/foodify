import { initialState } from "./InitialState"
import * as helper from './helper/HelperFunction'
import * as actionTypes from './ActionType'

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.REGISTER_REQUEST:
        case actionTypes.LOGIN_REQUEST:
        case actionTypes.GET_USER_REQUEST:
        case actionTypes.ADD_TO_FAVORITES_REQUEST:
            return helper.handleRequest(state)

        case actionTypes.REGISTER_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
            return helper.handleRegisterAndLoginSuccess(state, action.payload)

        case actionTypes.GET_USER_SUCCESS:
            return helper.handleGetUserSuccess(state, action.payload)

        case actionTypes.ADD_TO_FAVORITES_SUCCESS:
            return helper.handleAddToFavoritesSuccess(state, action.payload)

        case actionTypes.REGISTER_FAILED:
        case actionTypes.LOGIN_FAILED:
        case actionTypes.GET_USER_FAILED:
        case actionTypes.ADD_TO_FAVORITES_FAILED:
            return helper.handleFailed(state, action.payload)

        case actionTypes.LOGOUT:
            return initialState

        default:
            return state

    }
}