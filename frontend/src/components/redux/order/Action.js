import { api } from "../../config/Api";
import { 
    CREATE_ORDER_REQUEST, 
    CREATE_ORDER_SUCCESS, 
    GET_USERS_ORDERS_FAILED, 
    GET_USERS_ORDERS_REQUEST, 
    GET_USERS_ORDERS_SUCCESS 
} from "./ActionType";

export const createOrderAction = (requestData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST })
    try {
        const { data } = await api.post(`/api/order`, requestData.order, { headers: { Authorization: `Bearer ${requestData.token}` } })
        console.log("create order : ", data);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
    } catch (error) {
        console.log("create order : ", error);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: error })
    }
}

export const getUsersOrderAction = (token) => async (dispatch) => {
    dispatch({ type: GET_USERS_ORDERS_REQUEST })
    try {
        const { data } = await api.get(`/api/order/user`, { headers: { Authorization: `Bearer ${token}` } })
        console.log("get users order : ", data);
        dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload: data })
    } catch (error) {
        console.log("get users order : ", error);
        dispatch({ type: GET_USERS_ORDERS_FAILED, payload: error })
    }
}