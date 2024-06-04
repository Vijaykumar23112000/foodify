import { api } from "../../config/Api"
import {
    ADD_TO_FAVORITES_FAILED,
    ADD_TO_FAVORITES_REQUEST, 
    ADD_TO_FAVORITES_SUCCESS, 
    GET_USER_FAILED, 
    GET_USER_REQUEST, 
    GET_USER_SUCCESS, 
    LOGIN_FAILED, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGOUT, 
    REGISTER_FAILED, 
    REGISTER_REQUEST, 
    REGISTER_SUCCESS
} from './ActionType'

export const registerUserAction = (requestData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        const { data } = await api.post(`/auth/signup`, requestData.userData)
        if (data.token) localStorage.setItem("token", data.token)
        data.role === "ROLE_RESTAURANT_OWNER" ? requestData.navigate("/admin/restaurant") : requestData.navigate("/")
        dispatch({ type: REGISTER_SUCCESS, payload: data.token })
        console.log("Register Success : ", data)
    } catch (error) {
        dispatch({ type: REGISTER_FAILED, payload: error })
        console.log(error)
    }
}

export const loginUserAction = (requestData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const { data } = await api.post(`/auth/signin`, requestData.userData)
        if (data.token) localStorage.setItem("token", data.token)
        data.role === "ROLE_RESTAURANT_OWNER" ? requestData.navigate("/admin/restaurant") : requestData.navigate("/")
        dispatch({ type: LOGIN_SUCCESS, payload: data.token })
        console.log("Login Success : ", data)
    } catch (error) {
        dispatch({ type: LOGIN_FAILED, payload: error })
        console.log(error)
    }
}

export const getUserAction = (token) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    try {
        const { data } = await api.get(`/api/users/profile`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: GET_USER_SUCCESS, payload: data })
        console.log("User Profile : ", data)
    } catch (error) {
        dispatch({ type: GET_USER_FAILED, payload: error })
        console.log(error)
    }
}

export const addToFavoriteAction = ({restaurantId , token}) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVORITES_REQUEST })
    try {
        const { data } = await api.put(`api/restaurants/${restaurantId}/add-favorites`, {}, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: ADD_TO_FAVORITES_SUCCESS, payload: data })
        console.log("added to favorites : ", data)
    } catch (error) {
        dispatch({ type: ADD_TO_FAVORITES_FAILED, payload: error })
        console.log(error)
    }
}

export const logoutAction = () => async (dispatch) => {
    try {
        localStorage.clear()
        dispatch({ type: LOGOUT })
        console.log("Logout Success")
    } catch (error) {
        console.log(error)
    }
}