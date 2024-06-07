import { api } from "../../config/Api";
import * as actionTypes from "./ActionType";

export const getIngredientsOfRestaurantAction = ({ id, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_INGREDIENT_CATEGORY_REQUEST })
    await api.get(`/api/admin/ingredients/restaurant/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_INGREDIENTS_SUCCESS, payload: res.data })
            console.log("Ingredients.Action => Get Ingredients Of Restaurant Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.GET_INGREDIENTS_FAILED, payload: error })
            console.log("Ingredients.Action => Get Ingredients Of Festaurant Failed : ", error);
        })
}

export const createIngredientAction = ({ ingredientData, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_INGREDIENT_REQUEST })
    await api.post(`/api/admin/ingredients`, ingredientData, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.CREATE_INGREDIENT_SUCCESS, payload: res.data })
            console.log("Ingredients.Action => Create Ingredients Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.CREATE_INGREDIENT_FAILED, payload: error })
            console.log("Ingredients.Action => Create Ingredients Failed : ", error);
        })
}

export const createIngredientCategoryAction = ({ ingredientCategoryData, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_INGREDIENT_CATEGORY_REQUEST })
    await api.post(`/api/admin/ingredients`, ingredientCategoryData, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: res.data })
            console.log("Ingredients.Action => Create Ingredient Category Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.CREATE_INGREDIENT_CATEGORY_FAILED, payload: error })
            console.log("Ingredients.Action => Create Ingredient Category Failed : ", error);
        })
}

export const getIngredientCategoryAction = ({ id, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_INGREDIENT_CATEGORY_REQUEST })
    await api.post(`/api/admin/ingredients/restaurant/${id}/category`, ingredientData, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.GET_INGREDIENT_CATEGORY_SUCCESS, payload: res.data })
            console.log("Ingredients.Action => Get Ingredient Category Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.GET_INGREDIENT_CATEGORY_FAILED, payload: error })
            console.log("Ingredients.Action => Get ingredient Category Failed : ", error);
        })
}

export const updateStockOfIngredientAction = ({ id, token }) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_STOCK_REQUEST })
    await api.put(`/api/admin/ingredients/${id}/stock`, {}, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            dispatch({ type: actionTypes.UPDATE_STOCK_SUCCESS, payload: res.data })
            console.log("Ingredients.Action => Get Ingredient Category Success : ", res.data);
        })
        .catch(error => {
            dispatch({ type: actionTypes.UPDATE_STOCK_FAILED, payload: error })
            console.log("Ingredients.Action => Get Ingredient Category Failed : ", error);
        })
}