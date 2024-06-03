export const handleRequest = state => (
    {
        ...state,
        loading: true,
        error: null,
        message: null
    }
)

export const handleCreateMenuItemSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        menuItems: [...state.menuItems, payload],
        message: "Food Created Successfully"
    }
)

export const handleGetMenuItemsByRestaurantIdSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        menuItems: payload
    }
)

export const handleDeleteMenuItemSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        menuItems: state.menuItems.filter(item => item.id !== payload)
    }
)

export const handleUpdateMenuItemsAvailability = (state, payload) => (
    {
        ...state,
        loading: false,
        menuItems: state.menuItems.map(item => item.id === payload.id ? payload : item)
    }
)

export const handleSearchMenuItemSuccess = (state , payload) => (
    {
        ...state,
        loading: false,
        search: payload
    }
)

export const handleFailed = (state , payload) => (
    {
        ...state,
        loading: false,
        error: payload,
        message: null
    }
)