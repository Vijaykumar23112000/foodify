export const handleRequest = state => (
    {
        ...state,
        loading: true,
        error: null
    }
)

export const handleCreateRestaurantSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        usersRestaurant: payload
    }
)

export const handleGetAllRestaurantSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        restaurants: payload
    }
)

export const handleGetRestaurantByIdSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        restaurant: payload
    }
)

export const handleUpdateAndGetRestaurantByUserIdSuccess = (state, payload) => (
    {
        ...state,
        loading: false,
        usersRestaurant: payload
    }
)

export const handleDeleteRestaurantSuccess = (state, payload) => (
    {
        ...state,
        error: null,
        loading: false,
        restaurants: state.restaurants.filter(item => item.id !== payload),
        usersRestaurant: state.usersRestaurant.filter(item => item.id !== payload)
    }
)

export const handleCreateEventSuccess = (state,payload) => (
    {
        ...state,
        loading: false,
        events: [...state.events , payload],
        restaurantsEvents: [...state.restaurantsEvents , payload]
    }
)

export const handleGetAllEventsSuccess = (state , payload) => (
    {
        ...state,
        loading: false,
        events: payload
    }
)

export const handleGetRestaurantEventsSuccess = (state , payload) => (
    {
        ...state,
        loading: false,
        restaurantsEvents: payload
    }
)

export const handleDeleteEventsSuccess = (state , payload) => (
    {
        ...state,
        loading: false,
        events: state.events.filter(item => item.id !== payload),
        restaurantsEvents: state.restaurantsEvents.filter(item => item.id !== payload)
    }
)

export const handleCreateCategorySuccess = (state , payload) => (
    {
        ...state,
        loading: false,
        categories: [...state.categories , payload]
    }
)

export const handleGetRestaurantsCategorySuccess = (state , payload) => (
    {
        ...state,
        loading: false,
        categories: payload
    }
)

export const handleFailed = (state , payload) => (
    {
        ...state,
        loading: false,
        error: payload
    }
)











