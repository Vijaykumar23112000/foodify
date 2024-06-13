import { api } from "../../config/Api";
import * as actionTypes from './ActionType'

export const getAllRestaurantsAction = token => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ALL_RESTAURANTS_REQUEST })
    await api.get("/api/restaurants", { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_ALL_RESTAURANTS_SUCCESS, payload: res.data })
            console.log("Restaurant.Action => Get All Restaurants Success : ", res.data)
        })
        .catch(error => {
            dispatch({ type: actionTypes.GET_ALL_RESTAURANTS_FAILED, payload: error })
            console.log("Restaurant.Action => Get All Restaurants Failed : ", error)
        })
}

export const getRestaurantByIdAction = ({ token, restaurantId }) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_RESTAURANT_BY_ID_REQUEST })
    await api.get(`/api/restaurants/${restaurantId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_RESTAURANT_BY_ID_SUCCESS, payload: res.data })
            console.log("Restaurant.Action => Get restaurant by Restaurant Id Success : ", res.data)
        })
        .catch(error => {
            console.log("Restaurant.Action => Get restaurant by Restaurant Id Failed : ", error)
            dispatch({ type: actionTypes.GET_RESTAURANT_BY_ID_FAILED, payload: error })
        })
}

export const getRestaurantByUserIdAction = token => async (dispatch) => {
    dispatch({ type: actionTypes.GET_RESTAURANT_BY_USER_ID_REQUEST })
    await api.get("/api/admin/restaurants/user", { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: res.data })
            console.log("Restaurant.Action => Get restaurant by User id Success : ", res.data);
        })
        .catch(error => {
            console.log("Restaurant.Action => Get restaurant by User id Failed : ", error)
            dispatch({ type: actionTypes.GET_RESTAURANT_BY_USER_ID_FAILED, payload: error })
        })
}

export const createRestaurantAction = requestData => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_RESTAURANT_REQUEST })
    await api.post("/api/admin/restaurants", requestData.data, { headers: { Authorization: `Bearer ${requestData.token}` } })
        .then(res => {
            dispatch({ type: actionTypes.CREATE_RESTAURANT_SUCCESS, payload: res.data })
            console.log("Restaurant.Action => Create Restaurant Success : ", res.data);
        })
        .catch(error => {
            console.log("Restaurant.Action => Create Restaurant Failed : ", error)
            dispatch({ type: actionTypes.CREATE_RESTAURANT_FAILED, payload: error })
        })
}

export const updateRestaurantAction = ({ restaurantId, restaurantData, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_RESTAURANT_REQUEST })
    await api.put(`/api/admin/restaurant/${restaurantId}`, restaurantData, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.UPDATE_RESTAURANT_SUCCESS, payload: res.data })
            console.log("Restaurant.Action => Update Restaurant Success : ", res.data);
        })
        .catch(error => {
            console.log("Restaurant.Action => Update Restaurant Failed : ", error)
            dispatch({ type: actionTypes.UPDATE_RESTAURANT_FAILED, payload: error })
        })
}

export const deleteRestaurantAction = ({ restaurantId, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_RESTAURANT_REQUEST })
    await api.delete(`/api/admin/restaurant/${restaurantId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.DELETE_RESTAURANT_SUCCESS, payload: res.data })
            console.log("Restaurant.Action => Delete Restaurant Success: ", res.data);
        })
        .catch(error => {
            console.log("Restaurant.Action => Delete Restaurant Failed : ", error)
            dispatch({ type: actionTypes.DELETE_RESTAURANT_FAILED, payload: error })
        })
}

export const updateRestaurantStatusAction = ({ restaurantId, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_RESTAURANT_STATUS_REQUEST })
    await api.put(`/api/admin/restaurants/${restaurantId}/status`, {}, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.UPDATE_RESTAURANT_STATUS_SUCCESS, payload: res.data })
            console.log("Restaurant.Action => Update Restaurant Status Success : ", res.data);
        })
        .catch(error => {
            console.log("Restaurant.Action => Update Restaurant Status Failed : ", error)
            dispatch({ type: actionTypes.UPDATE_RESTAURANT_STATUS_FAILED, payload: error })
        })
}

export const createEventAction = ({ eventData, token, restaurantId }) => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_EVENT_REQUEST })
    await api.post(`/api/admin/events/restaurant/${restaurantId}`, eventData, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.CREATE_EVENT_SUCCESS, payload: res.data })
            console.log("Restaurant.Action => Create Event Success : ", res.data);
        })
        .catch(error => {
            console.log("Restaurant.Action => Create Event Failed : ", error)
            dispatch({ type: actionTypes.CREATE_EVENT_FAILED, payload: error })
        })
}

export const getAllEventsAction = ({ token }) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ALL_EVENTS_REQUEST })
    await api.get(`/api/events`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_ALL_EVENTS_SUCCESS, payload: res.data })
            console.log("Restaurant.Action => Get All Event Success : ", res.data);
        })
        .catch(error => {
            console.log("Restaurant.Action => Get All Event Failed : ", error)
            dispatch({ type: actionTypes.GET_ALL_EVENTS_FAILED, payload: error })
        })
}

export const deleteEventAction = ({ eventId, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_EVENT_REQUEST })
    await api.delete(`/api/admin/events/${eventId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.DELETE_EVENT_SUCCESS, payload: eventId })
            console.log("Restaurant.Action => Delete Event Success : ", res.data);
        })
        .catch(error => {
            console.log("Restaurant.Action => Delete Event Failed : ", error)
            dispatch({ type: actionTypes.DELETE_EVENT_FAILED, payload: error })
        })
}

export const getRestaurantEventsAction = ({ restaurantId, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_RESTAURANT_EVENTS_REQUEST })
    await api.get(`/api/admin/events/restaurant/${restaurantId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_RESTAURANT_EVENTS_SUCCESS, payload: res.data })
            console.log("Restaurant.Action => Get Restaurant Event Success : ", res.data);
        })
        .catch(error => {
            console.log("Restaurant.Action => Get Restaurant Event Failed : ", error)
            dispatch({ type: actionTypes.GET_RESTAURANT_EVENTS_FAILED, payload: error })
        })
}

export const createCategoryAction = ({ requestData, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_CATEGORY_REQUEST })
    await api.post(`/api/admin/category`, requestData.name, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.CREATE_CATEGORY_SUCCESS, payload: res.data })
            console.log("Restaurant.Action => Create Category Success : ", res.data);
        })
        .catch(error => {
            console.log("Restaurant.Action => Create Category Failed : ", error)
            dispatch({ type: actionTypes.CREATE_CATEGORY_FAILED, payload: error })
        })
}

export const getRestaurantCategoryAction = ({ restaurantId, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_RESTAURANT_CATEGORY_REQUEST })
    await api.get(`/api/category/restaurant/${restaurantId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_RESTAURANT_CATEGORY_SUCCESS, payload: res.data })
            console.log("Restaurant.Action => Get Restaurants Category Success : ", res.data);
        })
        .catch(error => {
            console.log("Restaurant.Action => Get Restaurants Category Failed : ", error)
            dispatch({ type: actionTypes.GET_RESTAURANT_CATEGORY_FAILED, payload: error })
        })
}