export const handleGetIngredientsRequest = state => (
    {
        ...state,
        loading: true,
    }
)

export const handleGetIngredientsSuccess = (state, payload) => (
    {
        ...state,
        ingredients: payload
    }
)

export const handleGetIngredientCategorySuccess = (state, payload) => (
    {
        ...state,
        category: payload
    }
)

export const handleCreateIngredientCategorySuccess = (state, payload) => (
    {
        ...state,
        category: [...state.category, payload]
    }
)

export const handleCreateIngredientSuccess = (state, payload) => (
    {
        ...state,
        ingredients: [...state.ingredients, payload]
    }
)

export const handleUpdateStock = (state, payload) => (
    {
        ...state,
        update: payload,
        ingredients: state.ingredients.map(item => item.id === payload.id ? payload : item)
    }
)

export const handleFailed = (state , payload) => (
    {
        ...state,
        error: payload
    }
)