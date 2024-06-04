import { 
    CREATE_CATEGORY_FAILED, 
    CREATE_CATEGORY_REQUEST, 
    CREATE_CATEGORY_SUCCESS, 
    CREATE_EVENT_FAILED,
    CREATE_EVENT_SUCCESS, 
    CREATE_RESTAURANT_FAILED, 
    CREATE_RESTAURANT_REQUEST, 
    CREATE_RESTAURANT_SUCCESS, 
    DELETE_EVENT_SUCCESS, 
    DELETE_RESTAURANT_FAILED, 
    DELETE_RESTAURANT_REQUEST, 
    DELETE_RESTAURANT_SUCCESS, 
    GET_ALL_EVENTS_SUCCESS, 
    GET_ALL_RESTAURANTS_FAILED, 
    GET_ALL_RESTAURANTS_REQUEST, 
    GET_ALL_RESTAURANTS_SUCCESS, 
    GET_RESTAURANT_BY_ID_FAILED, 
    GET_RESTAURANT_BY_ID_REQUEST, 
    GET_RESTAURANT_BY_ID_SUCCESS, 
    GET_RESTAURANT_BY_USER_ID_SUCCESS, 
    GET_RESTAURANT_CATEGORY_FAILED, 
    GET_RESTAURANT_CATEGORY_REQUEST, 
    GET_RESTAURANT_CATEGORY_SUCCESS, 
    GET_RESTAURANT_EVENTS_SUCCESS, 
    UPDATE_RESTAURANT_FAILED, 
    UPDATE_RESTAURANT_REQUEST, 
    UPDATE_RESTAURANT_STATUS_SUCCESS, 
    UPDATE_RESTAURANT_SUCCESS 
} from "./ActionType";
import { initialState } from "./InitialState";
import { 
    handleCreateCategorySuccess, 
    handleCreateEventSuccess, 
    handleCreateRestaurantSuccess, 
    handleDeleteEventsSuccess, 
    handleDeleteRestaurantSuccess, 
    handleFailed, 
    handleGetAllEventsSuccess, 
    handleGetAllRestaurantSuccess, 
    handleGetRestaurantByIdSuccess, 
    handleGetRestaurantEventsSuccess, 
    handleGetRestaurantsCategorySuccess, 
    handleRequest, 
    handleUpdateAndGetRestaurantByUserIdSuccess 
} from "./helper/HelperFunction";

export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_RESTAURANT_REQUEST:
        case GET_ALL_RESTAURANTS_REQUEST:
        case DELETE_RESTAURANT_REQUEST:
        case UPDATE_RESTAURANT_REQUEST:
        case GET_RESTAURANT_BY_ID_REQUEST:
        case CREATE_CATEGORY_REQUEST:
        case GET_RESTAURANT_CATEGORY_REQUEST:
            return handleRequest(state)

        case CREATE_RESTAURANT_SUCCESS:
            return handleCreateRestaurantSuccess(state, action.payload)

        case GET_ALL_RESTAURANTS_SUCCESS:
            return handleGetAllRestaurantSuccess(state, action.payload)

        case GET_RESTAURANT_BY_ID_SUCCESS:
            return handleGetRestaurantByIdSuccess(state, action.payload)

        case GET_RESTAURANT_BY_USER_ID_SUCCESS:
        case UPDATE_RESTAURANT_STATUS_SUCCESS:
        case UPDATE_RESTAURANT_SUCCESS:
            return handleUpdateAndGetRestaurantByUserIdSuccess(state , action.payload)
        
        case DELETE_RESTAURANT_SUCCESS:
            return handleDeleteRestaurantSuccess(state , action.payload)

        case CREATE_EVENT_SUCCESS:
            return handleCreateEventSuccess(state , action.payload)

        case GET_ALL_EVENTS_SUCCESS:
            return handleGetAllEventsSuccess(state , action.payload)

        case GET_RESTAURANT_EVENTS_SUCCESS:
            return handleGetRestaurantEventsSuccess(state , action.payload)

        case DELETE_EVENT_SUCCESS:
            return handleDeleteEventsSuccess(state,action.payload)

        case CREATE_CATEGORY_SUCCESS:
            return handleCreateCategorySuccess(state , action.payload)

        case GET_RESTAURANT_CATEGORY_SUCCESS:
            return handleGetRestaurantsCategorySuccess(state , action.payload)

        case CREATE_RESTAURANT_FAILED:
        case GET_ALL_RESTAURANTS_FAILED:
        case DELETE_RESTAURANT_FAILED:
        case UPDATE_RESTAURANT_FAILED:
        case GET_RESTAURANT_BY_ID_FAILED:
        case CREATE_EVENT_FAILED:
        case CREATE_CATEGORY_FAILED:
        case GET_RESTAURANT_CATEGORY_FAILED:
            return handleFailed(state , action.payload)

        default:
            return state
    }
}