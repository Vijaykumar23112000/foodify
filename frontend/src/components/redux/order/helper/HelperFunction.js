export const handleRequest = state => (
    {
        ...state,
        error: null,
        loading: true
    }
)

export const handleGetUsersOrderSuccess = (state , payload) => (
    {
        ...state,
        error: null,
        loading: false,
        orders: payload
    }
)

export const handleFailed = (state , payload) => (
    {
        ...state,
        loading: false,
        error: payload
    }
)