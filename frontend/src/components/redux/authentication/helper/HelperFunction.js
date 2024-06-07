export const handleRequest = state => (
    {
        ...state,
        isLoading: true,
        error: null,
        success: null
    }
)

export const handleRegisterAndLoginSuccess = (state, payload) => (
    {
        ...state,
        isLoading: false,
        error: null,
        success: "Registration Success",
        token: payload
    }
)

export const handleAddToFavoritesSuccess = (state, payload) => (
    {
        ...state,
        isLoading: false,
        error: null,
        favorites: isPresentInFavorites(state.favorites, payload) ?
            state.favorites.filter(item => item.id !== payload.id) :
            [payload, ...state.favorites]
    }
)

export const handleFailed = (state, payload) => (
    {
        ...state,
        isLoading: false,
        error: payload,
        success: null
    }
)

export const handleGetUserSuccess = (state, payload) => (
    {
        ...state,
        isLoading: false,
        user: payload,
        favorites: payload.favorites
    }
)

const isPresentInFavorites = (favorites, restaurant) => favorites.find(item => item.id === restaurant.id) !== undefined