export const handleRequest = state => (
    {
        ...state,
        loading: true,
        error: null
    }
)

export const handleFindCartAndClearCartSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        cart: payload,
        cartItems: payload.items
    }
)


export const handleAddItemToCartSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        cartItems: [...state.cartItems, payload]
    }
)

export const handleUpdateCartItemSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        cartItems: state.cartItems.map(item => item.id === payload.id ? payload : item)
    }
)

export const handleRemoveCartItemSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        cartItems: state.cartItems.filter(item => item.id !== payload)
    }
)

export const handleFailed = (state, payload) => (
    {
        ...state,
        loading: false,
        error: payload
    }
)

export const handleLogout = state => {
    localStorage.removeItem("token")
    return {
        ...state,
        cartItems: [],
        cart: null,
        success: "Logout Success"
    }
}