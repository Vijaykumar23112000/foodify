import { initialState } from "./InitialState"
import { handleAddToFavorites, handleFailiure, handleGetUser, handleRequest, handleSuccess } from "./helper/HelperFunction"
import {
    ADD_TO_FAVORITES_FAILED,
    ADD_TO_FAVORITES_REQUEST,
    ADD_TO_FAVORITES_SUCCESS,
    GET_USER_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILED,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "./ActionType"

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITES_REQUEST:
            return handleRequest(state)

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return handleSuccess(state, action.payload)

        case GET_USER_SUCCESS:
            return handleGetUser(state, action.payload)

        case ADD_TO_FAVORITES_SUCCESS:
            return handleAddToFavorites(state, action.payload)

        case REGISTER_FAILED:
        case LOGIN_FAILED:
        case GET_USER_FAILED:
        case ADD_TO_FAVORITES_FAILED:
            return handleFailiure(state, action.payload)

        case LOGOUT:
            return initialState

        default:
            return state

    }
}