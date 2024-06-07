import { api } from "../../config/Api";
import * as actionTypes from './ActionType'

export const createOrderAction = requestData => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_ORDER_REQUEST })
    await api.post(`/api/order`, requestData.order, { headers: { Authorization: `Bearer ${requestData.token}` } })
        .then(res => {
            dispatch({ type: actionTypes.CREATE_ORDER_SUCCESS, payload: res.data })
            console.log("Order.Action => Create Order Success : ", res.data);
        })
        .catch (error => {
            dispatch({ type: actionTypes.CREATE_ORDER_FAILED, payload: error })
            console.log("Order.Action => Create Order Failed : ", error);
        })
}

export const getUsersOrderAction = token => async (dispatch) => {
    dispatch({ type: actionTypes.GET_USERS_ORDERS_REQUEST })
    await api.get(`/api/order/user`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_USERS_ORDERS_SUCCESS, payload: res.data })
            console.log("Order.Action => Get Users Order Success : ", res.data);
        })
        .catch (error => {
            dispatch({ type: actionTypes.GET_USERS_ORDERS_FAILED, payload: error })
            console.log("Order.Action => Get Users Order Failed : ", error);
        })
}