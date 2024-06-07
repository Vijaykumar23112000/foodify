import { api } from "../../config/Api";
import * as actionTypes from './ActionType'

export const findCartAction = token => async (dispatch) => { 
    dispatch({ type: actionTypes.FIND_CART_REQUEST })
    await api.get(`/api/cart`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.FIND_CART_SUCCESS, payload: res.data })
            console.log("Cart.Action => Find Cart Success : ", res.data)
        })
        .catch (error => {
            dispatch({ type: actionTypes.FIND_CART_FAILED, payload: error })
            console.log("Cart.Action => Find Cart Failed : ", error);
        })
}

export const getAllCartItemsAction = requestData => async (dispatch) => {
    dispatch({ type: actionTypes.GET_ALL_CART_ITEMS_REQUEST })
    await api.get(`/api/carts/${requestData.cartId}/items`, { headers: { Authorization: `Bearer ${requestData.token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_ALL_CART_ITEMS_SUCCESS, payload: res.data })
            console.log("Cart.Action => Get All Cart Items Success : ", res.data)
        })
        .catch (error => {
            dispatch({ type: actionTypes.GET_ALL_CART_ITEMS_FAILED, payload: error })
            console.log("Cart.Action => Get All Cart Items Failed : ", error);
        })
}

export const addItemToCartAction = requestData => async (dispatch) => {
    dispatch({ type: actionTypes.ADD_ITEM_TO_CART_REQUEST })
    await api.put(`/api/cart/add`, requestData.cartItem, { headers: { Authorization: `Bearer ${requestData.token}` } })
        .then(res => {
            dispatch({ type: actionTypes.ADD_ITEM_TO_CART_SUCCESS, payload: res.data })
            console.log("Cart.Action => Add Items To Cart Success : ", res.data)
        })
        .catch (error => {
            dispatch({ type: actionTypes.ADD_ITEM_TO_CART_FAILED, payload: error })
            console.log("Cart.Action => Add Items To Cart Failed : ", error);
        })
}

export const updateCartItemAction = ({requestData , token}) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_CART_ITEM_REQUEST })
    await api.put(`/api/cart-item/update`, requestData, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.UPDATE_CART_ITEM_SUCCESS, payload: res.data })
            console.log("Cart.Action => Update Cart Items Success : ", res.data)
        })
        .catch (error => {
            dispatch({ type: actionTypes.UPDATE_CART_ITEM_FAILED, payload: error })
            console.log("Cart.Action => Update Cart Items Failed : ", error);
        })
}

export const removeCartItemAction = ({ cartItemId, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_CART_ITEM_REQUEST })
    await api.delete(`/api/cart-item/${cartItemId}/remove`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.REMOVE_CART_ITEM_SUCCESS, payload: cartItemId })
            console.log("Cart.Action => Remove Cart Item Success : ", res.data)
        })
        .catch (error => {
            dispatch({ type: actionTypes.REMOVE_CART_ITEM_FAILED, payload: error })
            console.log("Cart.Action => Remove Cart Item Failed : ", error);
        })
}

export const clearCartAction = () => async (dispatch) => {
    dispatch({ type: actionTypes.CLEAR_CART_REQUEST })
    await api.put(`/api/cart/clear`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
        .then(res => {
            dispatch({ type: actionTypes.CLEAR_CART_SUCCESS, payload: res.data })
            console.log("Cart.Action => Remove Cart Item Success : ", res.data)
        })
        .catch (error => {
            dispatch({ type: actionTypes.CLEAR_CART_FAILED, payload: error })
            console.log("Cart.Action => Remove Cart Item Failed : ", error);
        })
}