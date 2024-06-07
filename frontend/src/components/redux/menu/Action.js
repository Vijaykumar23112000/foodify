import { api } from "../../config/Api";
import { 
    CREATE_MENU_ITEM_FAILED, 
    CREATE_MENU_ITEM_REQUEST, 
    CREATE_MENU_ITEM_SUCCESS, 
    DELETE_MENU_ITEM_FAILED, 
    DELETE_MENU_ITEM_REQUEST, 
    DELETE_MENU_ITEM_SUCCESS, 
    GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILED, 
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, 
    GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, 
    SEARCH_MENU_ITEM_FAILED, 
    SEARCH_MENU_ITEM_REQUEST, 
    SEARCH_MENU_ITEM_SUCCESS, 
    UPDATE_MENU_ITEMS_AVAILABILITY_FAILED, 
    UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, 
    UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS 
} from "./ActionType";

export const createMenuItemAction = ({ menu, token }) => async (dispatch) => {
    dispatch({ type: CREATE_MENU_ITEM_REQUEST })
    try {
        const { data } = await api.post("api/admin/food", menu, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data })
        console.log("create menu item : ", data);
    } catch (error) {
        console.log("create menu item : ", error);
        dispatch({ type: CREATE_MENU_ITEM_FAILED, payload: error })
    }
}

export const getMenuItemsByRestaurantIdAction = (requestData) => async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST })
    try {
        const { data } = await api.get(`api/foods/restaurant/${requestData.restaurantId}?isVegetarian=${requestData.isVegetarian}&isNonVeg=${requestData.isNonVeg}&isSeasonal=${requestData.isSeasonal}&foodCategory=${requestData.foodCategory}`,
            { headers: { Authorization: `Bearer ${requestData.token}` } })
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data })
        console.log("get menu items by restaurant id : ", data);
    } catch (error) {
        console.log("get menu items by restaurant id : ", error);
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILED, payload: error })
    }
}

export const searchMenuItemAction = ({ keyword, token }) => async (dispatch) => {
    dispatch({ type: SEARCH_MENU_ITEM_REQUEST })
    try {
        const { data } = await api.get(`api/food/search?name=${keyword}`,
            { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data })
        console.log("search menu items : ", data);
    } catch (error) {
        console.log("search menu items : ", error);
        dispatch({ type: SEARCH_MENU_ITEM_FAILED, payload: error })
    }
}

export const updateMenuItemsAvailabilityAction = ({ foodId, token }) => async (dispatch) => {
    dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST })
    try {
        const { data } = await api.put(`api/admin/food/${foodId}`,{}, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data })
        console.log("update menu items availability : ", data);
    } catch (error) {
        console.log("update menu items availability : ", error);
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILED, payload: error })
    }
}

export const deleteFoodAction = ({ foodId, token }) => async (dispatch) => {
    dispatch({ type: DELETE_MENU_ITEM_REQUEST })
    try {
        const { data } = await api.delete(`api/admin/food/${foodId}`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: data })
        console.log("delete food : ", data);
    } catch (error) {
        console.log("delete food : ", error);
        dispatch({ type: DELETE_MENU_ITEM_FAILED, payload: error })
    }
}