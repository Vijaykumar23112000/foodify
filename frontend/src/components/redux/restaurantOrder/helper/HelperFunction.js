export const handleRequest = state => (
    {
        ...state,
        loading: true,
        error: null
    }
)

export const handleGetRestaurantOrderSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        orders: payload
    }
)

export const handleUpdateOrderStatusSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        orders: state.orders.map(order => order.id === payload.id ? payload : order)
    }
)

export const handleFailed = (state, payload) => (
    {
        ...state,
        loading: false,
        error: payload
    }
)