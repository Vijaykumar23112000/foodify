export const handleRequest = state => (
    {
        ...state,
        isLoading: true,
        error: null,
        success: null
    }
)

export const handleSuccess = (state, payload) => (
    {
        ...state,
        isLoading: false,
        error: null,
        success: "Registration Success",
        token: payload
    }
)

export const handleAddToFavorites = (state, payload) => (
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

export const handleGetUser = (state , payload) => (
    {
        ...state,
        isLoading: false,
        user: payload
    }
)

const isPresentInFavorites = (favorites, restaurant) => {
    for (let item of favorites) {
        if (restaurant.id === item.id) return true
    }
    return false
}