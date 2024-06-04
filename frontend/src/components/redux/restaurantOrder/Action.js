import { api } from "../../config/Api";
import { 
    GET_RESTAURANTS_ORDER_FAILED,
    GET_RESTAURANTS_ORDER_REQUEST,
    GET_RESTAURANTS_ORDER_SUCCESS,
    UPDATE_ORDER_STATUS_FAILED, 
    UPDATE_ORDER_STATUS_REQUEST, 
    UPDATE_ORDER_STATUS_SUCCESS 
} from "./ActionType";

export const updateRestaurantOrderStatus = ({ orderId, orderStatus, token }) => async (dispatch) => {
    dispatch({ type: UPDATE_ORDER_STATUS_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/${orderStatus}`, {}, { headers: { Authorization: `Bearer ${token}` } })
        console.log("Update restaurant order status : ", data);
        dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: data })
    } catch (error) {
        console.log("update restaurant order status: ",error);
        dispatch({ type: UPDATE_ORDER_STATUS_FAILED, payload: error })
    }
}

export const fetchRestaurantsOrder = ({ restaurantId, orderStatus, token }) => async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST })
    try {
        const { data } = await api.put(`/api/admin/order/${restaurantId}`, { params: {order_status: orderS}, headers: { Authorization: `Bearer ${token}` } })
        console.log("fetch restaurant order : ", data);
        dispatch({ type: GET_RESTAURANTS_ORDER_SUCCESS, payload: data })
    } catch (error) {
        console.log("fetch restaurant order : ",error);
        dispatch({ type: GET_RESTAURANTS_ORDER_FAILED, payload: error })
    }
}