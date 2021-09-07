export const TOKEN_KEY = "hotel_engine_token"

export const setToken = (value) => localStorage.setItem(TOKEN_KEY, value)

export const fetchToken = () => localStorage.getItem(TOKEN_KEY)

export const removeToken = () => localStorage.removeItem(TOKEN_KEY)
