import { api } from "../../config/Api";
import {
    ADD_ITEM_TO_CART_FAILED,
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    CLEAR_CART_FAILED,
    CLEAR_CART_REQUEST,
    CLEAR_CART_SUCCESS,
    FIND_CART_FAILED,
    FIND_CART_REQUEST,
    FIND_CART_SUCCESS,
    GET_ALL_CART_ITEMS_FAILED,
    GET_ALL_CART_ITEMS_REQUEST,
    GET_ALL_CART_ITEMS_SUCCESS,
    REMOVE_CART_ITEM_FAILED,
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_FAILED,
    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS
} from "./ActionType";

export const findCartAction = (token) => async (dispatch) => {
    dispatch({ type: FIND_CART_REQUEST })
    try {
        const { data } = api.get(`/api/cart`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: FIND_CART_SUCCESS, payload: data })
        console.log("find cart : ", data)
    } catch (error) {
        console.log("find cart : ", data);
        dispatch({ type: FIND_CART_FAILED, payload: error })
    }
}

export const getAllCartItemsAction = (requestData) => async (dispatch) => {
    dispatch({ type: GET_ALL_CART_ITEMS_REQUEST })
    try {
        const { data } = api.get(`/api/carts/${requestData.cartId}/items`, { headers: { Authorization: `Bearer ${requestData.token}` } })
        dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: data })
        console.log("get all cart items : ", data)
    } catch (error) {
        console.log("get all cart items : ", data);
        dispatch({ type: GET_ALL_CART_ITEMS_FAILED, payload: error })
    }
}

export const addItemToCartAction = (requestData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
    try {
        const { data } = api.put(`/api/cart/add`, requestData.cartItem, { headers: { Authorization: `Bearer ${requestData.token}` } })
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
        console.log("Add items to cart : ", data)
    } catch (error) {
        console.log("Add items to cart : ", data);
        dispatch({ type: ADD_ITEM_TO_CART_FAILED, payload: error })
    }
}

export const updateCartItemAction = (requestData) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST })
    try {
        const { data } = api.put(`/api/cart-item/update`, requestData.data, { headers: { Authorization: `Bearer ${requestData.token}` } })
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data })
        console.log("update cart items to cart : ", data)
    } catch (error) {
        console.log("update cart items to cart : ", data);
        dispatch({ type: UPDATE_CART_ITEM_FAILED, payload: error })
    }
}

export const removeCartItemAction = ({ cartItemId, token }) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST })
    try {
        const { data } = api.delete(`/api/cart-item/${cartItemId}/remove`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId })
        console.log("remove cart item : ", data)
    } catch (error) {
        console.log("remove cart item : ", data);
        dispatch({ type: REMOVE_CART_ITEM_FAILED, payload: error })
    }
}

export const clearCartAction = () => async (dispatch) => {
    dispatch({ type: CLEAR_CART_REQUEST })
    try {
        const { data } = api.put(`/api/cart/clear`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
        dispatch({ type: CLEAR_CART_SUCCESS, payload: data })
        console.log("remove cart item : ", data)
    } catch (error) {
        console.log("remove cart item : ", data);
        dispatch({ type: CLEAR_CART_FAILED, payload: error })
    }
}