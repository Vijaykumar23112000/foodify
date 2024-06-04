import { api } from "../../config/Api";
import { 
    CREATE_INGREDIENT_CATEGORY_FAILED, 
    CREATE_INGREDIENT_CATEGORY_REQUEST, 
    CREATE_INGREDIENT_CATEGORY_SUCCESS, 
    CREATE_INGREDIENT_FAILED, 
    CREATE_INGREDIENT_REQUEST, 
    CREATE_INGREDIENT_SUCCESS, 
    GET_INGREDIENTS, 
    GET_INGREDIENT_CATEGORY_FAILED, 
    GET_INGREDIENT_CATEGORY_REQUEST,
    GET_INGREDIENT_CATEGORY_SUCCESS,
    UPDATE_STOCK
} from "./ActionType";

export const getIngredientsOfRestaurantAction = ({ id, token }) => async (dispatch) => {
    try{
        const { data } = await api.get(`/api/admin/ingredients/restaurant/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        console.log("get ingredients of restaurant : ",data);
        dispatch({type: GET_INGREDIENTS, payload: data})
    } catch (error){
        console.log("get ingredients of restaurant : ",error);
    }
}

export const createIngredientAction = ({ ingredientData, token }) => async (dispatch) => {
    dispatch({type: CREATE_INGREDIENT_REQUEST})
    try{
        const { data } = await api.post(`/api/admin/ingredients` , ingredientData, { headers: { Authorization: `Bearer ${token}` } })
        console.log("create ingredients : ",data);
        dispatch({type: CREATE_INGREDIENT_SUCCESS, payload: data})
    } catch (error){
        console.log("create ingredients : ",error);
        dispatch({type: CREATE_INGREDIENT_FAILED , payload: error})
    }
}

export const createIngredientCategoryAction = ({ ingredientCategoryData, token }) => async (dispatch) => {
    dispatch({type: CREATE_INGREDIENT_CATEGORY_REQUEST})
    try{
        const { data } = await api.post(`/api/admin/ingredients` , ingredientCategoryData, { headers: { Authorization: `Bearer ${token}` } })
        console.log("create ingredient category : ",data);
        dispatch({type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: data})
    } catch (error){
        console.log("create ingredient caStegory : ",error);
        dispatch({type: CREATE_INGREDIENT_CATEGORY_FAILED , payload: error})
    }
}

export const getIngredientCategoryAction = ({ id, token }) => async (dispatch) => {
    dispatch({type: GET_INGREDIENT_CATEGORY_REQUEST})
    try{
        const { data } = await api.post(`/api/admin/ingredients/restaurant/${id}/category` , ingredientData, { headers: { Authorization: `Bearer ${token}` } })
        console.log("get ingredient category : ",data);
        dispatch({type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: data})
    } catch (error){
        console.log("get ingredient caStegory : ",error);
        dispatch({type: GET_INGREDIENT_CATEGORY_FAILED , payload: error})
    }
}

export const updateStockOfIngredientAction = ({ id, token }) => async (dispatch) => {
    try{
        const { data } = await api.put(`/api/admin/ingredients/${id}/stock` , {}, { headers: { Authorization: `Bearer ${token}` } })
        console.log("get ingredient category : ",data);
        dispatch({type: UPDATE_STOCK, payload: data})
    } catch (error){
        console.log("get ingredient caStegory : ",error);
    }
}