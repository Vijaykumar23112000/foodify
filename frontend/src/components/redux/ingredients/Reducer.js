import { 
    CREATE_INGREDIENT_CATEGORY_SUCCESS, 
    CREATE_INGREDIENT_SUCCESS, 
    GET_INGREDIENTS, 
    GET_INGREDIENT_CATEGORY_SUCCESS, 
    UPDATE_STOCK 
} from "./ActionType";
import { initialState } from "./InitialState";
import { 
    handleCreateIngredientCategorySuccess, 
    handleCreateIngredientSuccess, 
    handleGetIngredientCategorySuccess, 
    handleGetIngredients, 
    handleUpdateStock 
} from "./helper/HelperFunction";

export const ingredientReducer = (state = initialState , action) => {
    switch(action.type) {

        case GET_INGREDIENTS:
            return handleGetIngredients(state , action.payload)

        case GET_INGREDIENT_CATEGORY_SUCCESS:
            return handleGetIngredientCategorySuccess(state , action.payload)
        
        case CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return handleCreateIngredientCategorySuccess(state , action.payload)
        
        case CREATE_INGREDIENT_SUCCESS:
            return handleCreateIngredientSuccess(state , action.payload)
        
        case UPDATE_STOCK:
            return handleUpdateStock(state , action.payload)

        default:
            return state

    }
}