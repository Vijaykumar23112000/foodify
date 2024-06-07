import * as actionTypes from "./ActionType";
import { initialState } from "./InitialState";
import * as helper from "./helper/HelperFunction";

export const ingredientReducer = (state = initialState , action) => {
    switch(action.type) {

        case actionTypes.GET_INGREDIENTS_REQUEST:
        case actionTypes.UPDATE_STOCK_REQUEST:
        case actionTypes.CREATE_INGREDIENT_REQUEST:
        case actionTypes.CREATE_INGREDIENT_CATEGORY_REQUEST:
        case actionTypes.GET_INGREDIENT_CATEGORY_REQUEST:
            return helper.handleGetIngredientsRequest(state);

        case actionTypes.GET_INGREDIENTS_SUCCESS:
            return helper.handleGetIngredientsSuccess(state , action.payload)
        
        case actionTypes.UPDATE_STOCK_SUCCESS:
            return helper.handleUpdateStock(state , action.payload)

        case actionTypes.GET_INGREDIENT_CATEGORY_SUCCESS:
            return helper.handleGetIngredientCategorySuccess(state , action.payload)
        
        case actionTypes.CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return helper.handleCreateIngredientCategorySuccess(state , action.payload)
        
        case actionTypes.CREATE_INGREDIENT_SUCCESS:
            return helper.handleCreateIngredientSuccess(state , action.payload)
        
        case actionTypes.GET_INGREDIENTS_FAILED:
        case actionTypes.UPDATE_STOCK_FAILED:
        case actionTypes.CREATE_INGREDIENT_FAILED:
        case actionTypes.CREATE_INGREDIENT_CATEGORY_FAILED:
        case actionTypes.GET_INGREDIENT_CATEGORY_FAILED:
            return helper.handleFailed(state , action.payload)

        default:
            return state

    }
}