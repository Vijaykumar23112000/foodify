import { api } from "../../config/Api";
import {
    CREATE_CATEGORY_FAILED,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_EVENT_FAILED,
    CREATE_EVENT_REQUEST,
    CREATE_EVENT_SUCCESS,
    CREATE_RESTAURANT_FAILED,
    CREATE_RESTAURANT_REQUEST,
    CREATE_RESTAURANT_SUCCESS,
    DELETE_EVENT_FAILED,
    DELETE_EVENT_REQUEST,
    DELETE_EVENT_SUCCESS,
    DELETE_RESTAURANT_FAILED,
    DELETE_RESTAURANT_REQUEST,
    DELETE_RESTAURANT_SUCCESS,
    GET_ALL_EVENTS_FAILED,
    GET_ALL_EVENTS_REQUEST,
    GET_ALL_EVENTS_SUCCESS,
    GET_ALL_RESTAURANTS_FAILED,
    GET_ALL_RESTAURANTS_REQUEST,
    GET_ALL_RESTAURANTS_SUCCESS,
    GET_RESTAURANT_BY_ID_FAILED,
    GET_RESTAURANT_BY_ID_REQUEST,
    GET_RESTAURANT_BY_ID_SUCCESS,
    GET_RESTAURANT_CATEGORY_FAILED,
    GET_RESTAURANT_CATEGORY_REQUEST,
    GET_RESTAURANT_CATEGORY_SUCCESS,
    GET_RESTAURANT_EVENTS_FAILED,
    GET_RESTAURANT_EVENTS_REQUEST,
    GET_RESTAURANT_EVENTS_SUCCESS,
    UPDATE_RESTAURANT_FAILED,
    UPDATE_RESTAURANT_REQUEST,
    UPDATE_RESTAURANT_STATUS_FAILED,
    UPDATE_RESTAURANT_STATUS_REQUEST,
    UPDATE_RESTAURANT_STATUS_SUCCESS,
    UPDATE_RESTAURANT_SUCCESS
} from "./ActionType";

export const getAllRestaurantsAction = (token) => async (dispatch) => {
    dispatch({ type: GET_ALL_RESTAURANTS_REQUEST })
    try {
        const { data } = await api.get("/api/restaurants", { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data })
        console.log("Get All restaurants : ", data);
    } catch (error) {
        console.log("Get All restaurants : ", error)
        dispatch({ type: GET_ALL_RESTAURANTS_FAILED, payload: error })
    }
}

export const getRestaurantByIdAction = (requestData) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST })
    try {
        const { data } = await api.get(`/api/restaurants/${requestData.restaurantId}`, { headers: { Authorization: `Bearer ${requestData.token}` } })
        dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: data })
        console.log("Get restaurant by id : ", data);
    } catch (error) {
        console.log("Get restaurant by id : ", error)
        dispatch({ type: GET_RESTAURANT_BY_ID_FAILED, payload: error })
    }
}

export const getRestaurantByUserIdAction = (token) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST })
    try {
        const { data } = await api.get("/api/admin/restaurants/user", { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: data })
        console.log("Get restaurant by User id : ", data);
    } catch (error) {
        console.log("Get restaurant by User id : ", error)
        dispatch({ type: GET_RESTAURANT_BY_ID_FAILED, payload: error })
    }
}

export const createRestaurantAction = (requestData) => async (dispatch) => {
    dispatch({ type: CREATE_RESTAURANT_REQUEST })
    try {
        const { data } = await api.post("/api/admin/restaurants", requestData.data, { headers: { Authorization: `Bearer ${requestData.token}` } })
        dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data })
        console.log("create restaurant : ", data);
    } catch (error) {
        console.log("create restaurant : ", error)
        dispatch({ type: CREATE_RESTAURANT_FAILED, payload: error })
    }
}

export const updateRestaurantAction = ({ restaurantId, restaurantData, token }) => async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/restaurant/${restaurantId}`, restaurantData, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: data })
        console.log("update restaurant : ", data);
    } catch (error) {
        console.log("update restaurant : ", error)
        dispatch({ type: UPDATE_RESTAURANT_FAILED, payload: error })
    }
}

export const deleteRestaurantAction = ({ restaurantId, token }) => async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANT_REQUEST })
    try {
        const { data } = await api.delete(`/api/admin/restaurant/${restaurantId}`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: data })
        console.log("delete restaurant : ", data);
    } catch (error) {
        console.log("delete restaurant : ", error)
        dispatch({ type: DELETE_RESTAURANT_FAILED, payload: error })
    }
}

export const updateRestaurantStatusAction = ({ restaurantId, token }) => async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/restaurants/${restaurantId}/status`, {}, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: data })
        console.log("update restaurant status : ", data);
    } catch (error) {
        console.log("update restaurant status : ", error)
        dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILED, payload: error })
    }
}

export const createEventAction = ({ eventData, token, restaurantId }) => async (dispatch) => {
    dispatch({ type: CREATE_EVENT_REQUEST })
    try {
        const { data } = await api.post(`/api/admin/events/restaurant/${restaurantId}`, eventData, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: CREATE_EVENT_SUCCESS, payload: data })
        console.log("create event : ", data);
    } catch (error) {
        console.log("create event : ", error)
        dispatch({ type: CREATE_EVENT_FAILED, payload: error })
    }
}

export const getAllEventsAction = ({ token }) => async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST })
    try {
        const { data } = await api.get(`/api/events`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: data })
        console.log("get all event : ", data);
    } catch (error) {
        console.log("get all event : ", error)
        dispatch({ type: GET_ALL_EVENTS_FAILED, payload: error })
    }
}

export const deleteEventAction = ({ eventId ,  token }) => async (dispatch) => {
    dispatch({ type: DELETE_EVENT_REQUEST })
    try {
        const { data } = await api.delete(`/api/admin/events/${eventId}`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: DELETE_EVENT_SUCCESS, payload: eventId })
        console.log("delete event : ", data);
    } catch (error) {
        console.log("delete event : ", error)
        dispatch({ type: DELETE_EVENT_FAILED, payload: error })
    }
}

export const getRestaurantEventsAction = ({ restaurantId ,  token }) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_EVENTS_REQUEST })
    try {
        const { data } = await api.get(`/api/admin/events/restaurant/${restaurantId}`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: GET_RESTAURANT_EVENTS_SUCCESS, payload: data })
        console.log("get restaurant event : ", data);
    } catch (error) {
        console.log("get restaurant event : ", error)
        dispatch({ type: GET_RESTAURANT_EVENTS_FAILED, payload: error })
    }
}

export const createCategoryAction = ({ requestData ,  token }) => async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST })
    try {
        const { data } = await api.post(`/api/admin/category`, requestData, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data })
        console.log("create category event : ", data);
    } catch (error) {
        console.log("create category event : ", error)
        dispatch({ type: CREATE_CATEGORY_FAILED, payload: error })
    }
}

export const getRestaurantCategoryAction = ({ restaurantId ,  token }) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_CATEGORY_REQUEST })
    try {
        const { data } = await api.get(`/api/category/restaurant/${restaurantId}`, requestData, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: GET_RESTAURANT_CATEGORY_SUCCESS, payload: data })
        console.log("create category event : ", data);
    } catch (error) {
        console.log("create category event : ", error)
        dispatch({ type: GET_RESTAURANT_CATEGORY_FAILED, payload: error })
    }
}