import { api } from "../../config/Api";
import *as actionTypes from "./ActionType";

export const updateRestaurantOrderStatus = ({ orderId, orderStatus, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_ORDER_STATUS_REQUEST })
    await api.put(`/api/admin/orders/${orderId}/${orderStatus}`, {}, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.UPDATE_ORDER_STATUS_SUCCESS, payload: res.data })
            console.log("RestaurantOrder.Action => Update Restaurant Order Status Success : ", res.data);
        })
        .catch (error => {
            dispatch({ type: actionTypes.UPDATE_ORDER_STATUS_FAILED, payload: error })
            console.log("RestaurantOrder.Action => Update Restaurant Order Status Failed: ",error);
        })
}

export const fetchRestaurantsOrder = ({ restaurantId, orderStatus, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_RESTAURANTS_ORDER_REQUEST })
    await api.put(`/api/admin/order/${restaurantId}`, { params: {order_status: orderS}, headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_RESTAURANTS_ORDER_SUCCESS, payload: res.data })
            console.log("RestaurantOrder.Action => Fetch Restaurant Order Success : ", res.data);
        })
        .catch (error => {
            dispatch({ type: actionTypes.GET_RESTAURANTS_ORDER_FAILED, payload: error })
            console.log("RestaurantOrder.Action => Fetch Restaurant Order Failed : ",error);
        })
}