import { api } from "../../config/Api"
import * as actionTypes from './ActionType'

export const registerUserAction = requestData => async (dispatch) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST })
    await api.post("/auth/signup", requestData.userData)
        .then(res => {
            if (res.data.token) localStorage.setItem("token", res.data.token)
            res.data.role === "ROLE_RESTAURANT_OWNER" ? requestData.navigate("/admin/restaurant") : requestData.navigate("/")
            dispatch({ type: actionTypes.REGISTER_SUCCESS, payload: res.data.token })
            console.log("Authentication.Action => Register User Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.REGISTER_FAILED, payload: error })
            console.log("Authentication.Action => Register User Failed : ", error);
        })
}

export const loginUserAction = requestData => async (dispatch) => {
    dispatch({ type: actionTypes.LOGIN_REQUEST })
    await api.post("/auth/signin", requestData.userData)
        .then(res => {
            if (res.data.token) localStorage.setItem("token", res.data.token)
            res.data.role === "ROLE_RESTAURANT_OWNER" ? requestData.navigate("/admin/restaurant") : requestData.navigate("/")
            dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: res.data.token })
            console.log("Authentication.Action => Login User Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.LOGIN_FAILED, payload: error })
            console.log("Authentication.Action => Login User Failed : ", error);
        })
}

export const getUserAction = token => async (dispatch) => {
    dispatch({ type: actionTypes.GET_USER_REQUEST })
    await api.get("/api/users/profile", { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_USER_SUCCESS, payload: res.data })
            console.log("Authentication.Action => Get User Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.GET_USER_FAILED, payload: error })
            console.log("Authentication.Action => Get User Failed : ", error);
        })
}

export const addToFavoriteAction = ({ restaurantId, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.ADD_TO_FAVORITES_REQUEST })
    await api.put(`api/restaurants/${restaurantId}/add-favorites`, {}, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.ADD_TO_FAVORITES_SUCCESS, payload: res.data })
            console.log("Authentication.Action => Add To Favorites Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.ADD_TO_FAVORITES_FAILED, payload: error })
            console.log("Authentication.Action => Add To Favorites Failed : ", error);
        })
}

export const logoutAction = () => async (dispatch) => {
    try {
        localStorage.clear()
        dispatch({ type: actionTypes.LOGOUT })
        console.log("Authentication.Action => Logout Success")
    } catch (error) {
        console.log("Authentication.Action => Logout failed : ", error);
    }
}