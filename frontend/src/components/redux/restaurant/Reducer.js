import { initialState } from "./InitialState";
import * as helper from './helper/HelperFunction'
import * as actionTypes from './ActionType'

export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.CREATE_RESTAURANT_REQUEST:
        case actionTypes.GET_ALL_RESTAURANTS_REQUEST:
        case actionTypes.DELETE_RESTAURANT_REQUEST:
        case actionTypes.UPDATE_RESTAURANT_REQUEST:
        case actionTypes.GET_RESTAURANT_BY_ID_REQUEST:
        case actionTypes.CREATE_CATEGORY_REQUEST:
        case actionTypes.GET_RESTAURANT_CATEGORY_REQUEST:
            return helper.handleRequest(state)

        case actionTypes.CREATE_RESTAURANT_SUCCESS:
            return helper.handleCreateRestaurantSuccess(state, action.payload)

        case actionTypes.GET_ALL_RESTAURANTS_SUCCESS:
            return helper.handleGetAllRestaurantSuccess(state, action.payload)

        case actionTypes.GET_RESTAURANT_BY_ID_SUCCESS:
            return helper.handleGetRestaurantByIdSuccess(state, action.payload)

        case actionTypes.GET_RESTAURANT_BY_USER_ID_SUCCESS:
        case actionTypes.UPDATE_RESTAURANT_STATUS_SUCCESS:
        case actionTypes.UPDATE_RESTAURANT_SUCCESS:
            return helper.handleUpdateAndGetRestaurantByUserIdSuccess(state , action.payload)
        
        case actionTypes.DELETE_RESTAURANT_SUCCESS:
            return helper.handleDeleteRestaurantSuccess(state , action.payload)

        case actionTypes.CREATE_EVENT_SUCCESS:
            return helper.handleCreateEventSuccess(state , action.payload)

        case actionTypes.GET_ALL_EVENTS_SUCCESS:
            return helper.handleGetAllEventsSuccess(state , action.payload)

        case actionTypes.GET_RESTAURANT_EVENTS_SUCCESS:
            return helper.handleGetRestaurantEventsSuccess(state , action.payload)

        case actionTypes.DELETE_EVENT_SUCCESS:
            return helper.handleDeleteEventsSuccess(state,action.payload)

        case actionTypes.CREATE_CATEGORY_SUCCESS:
            return helper.handleCreateCategorySuccess(state , action.payload)

        case actionTypes.GET_RESTAURANT_CATEGORY_SUCCESS:
            return helper.handleGetRestaurantsCategorySuccess(state , action.payload)

        case actionTypes.CREATE_RESTAURANT_FAILED:
        case actionTypes.GET_ALL_RESTAURANTS_FAILED:
        case actionTypes.DELETE_RESTAURANT_FAILED:
        case actionTypes.UPDATE_RESTAURANT_FAILED:
        case actionTypes.GET_RESTAURANT_BY_ID_FAILED:
        case actionTypes.CREATE_EVENT_FAILED:
        case actionTypes.CREATE_CATEGORY_FAILED:
        case actionTypes.GET_RESTAURANT_CATEGORY_FAILED:
            return helper.handleFailed(state , action.payload)

        default:
            return state
    }
}