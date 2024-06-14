import { api } from "../../config/Api";
import * as actionTypes from './ActionType'

export const createMenuItemAction = ({ menu, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_MENU_ITEM_REQUEST })
    await api.post("api/admin/food", menu, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.CREATE_MENU_ITEM_SUCCESS, payload: res.data })
            console.log("Menu.Action => Create Menu Item Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.CREATE_MENU_ITEM_FAILED, payload: error })
            console.log("Menu.Action => Create Menu Item Failed : ", error);
        })
}

export const getMenuItemsByRestaurantIdAction = requestData => async (dispatch) => {
    dispatch({ type: actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST })
    const queryParams = new URLSearchParams({
        isVegetarian: requestData.isVegetarian ?? false,
        isNonVeg: requestData.isNonVeg ?? false,
        isSeasonal: requestData.isSeasonal ?? false,
        foodCategory: requestData.foodCategory
    });
    await api.get(`api/foods/restaurant/${requestData.restaurantId}?${queryParams}`,{ headers: { Authorization: `Bearer ${requestData.token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: res.data })
            console.log("Menu.Action => Get Menu Items By Restaurant Id Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILED, payload: error })
            console.log("Menu.Action => Get Menu Items By Restaurant Id Failed : ", error);
        })
}

export const searchMenuItemAction = ({ keyword, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.SEARCH_MENU_ITEM_REQUEST })
    await api.get(`api/food/search?name=${keyword}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.SEARCH_MENU_ITEM_SUCCESS, payload: res.data })
            console.log("Menu.Action => Search Menu Items Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.SEARCH_MENU_ITEM_FAILED, payload: error })
            console.log("Menu.Action => Search Menu Items Failed : ", error);
        })
}

export const updateMenuItemsAvailabilityAction = ({ foodId, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST })
    await api.put(`api/admin/food/${foodId}`, {}, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: res.data })
            console.log("Menu.Action => Update Menu Items Availability Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.UPDATE_MENU_ITEMS_AVAILABILITY_FAILED, payload: error })
            console.log("Menu.Action => Update Menu Items Availability Failed : ", error);
        })
}

export const deleteFoodAction = ({ foodId, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_MENU_ITEM_REQUEST })
    await api.delete(`api/admin/food/${foodId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.DELETE_MENU_ITEM_SUCCESS, payload: res.foodId })
            console.log("Menu.Action => Delete Food Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.DELETE_MENU_ITEM_FAILED, payload: error })
            console.log("Menu.Action => Delete Food Failed : ", error);
        })
}

export const getAllRestaurantsFood = ({restaurantId , token }) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ALL_MENU_ITEMS_OF_RESTAURANT_REQUEST })
    await api.get(`api/admin/food/restaurant/${restaurantId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_ALL_MENU_ITEMS_OF_RESTAURANT_SUCCESS, payload: res.data })
            console.log("Menu.Action => Get ALl Restaurants Food Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.GET_ALL_MENU_ITEMS_OF_RESTAURANT_FAILED, payload: error })
            console.log("Menu.Action => Get ALl Restaurants Food Failed : ", error);
        })
}