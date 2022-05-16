import {
    CART_REQUEST,
    CART_REQUEST_SUCCESS,
    CART_REQUEST_FAIL,
    CART_EMPTY,
    CART_REMOVE_REQUEST,
    CART_REMOVE_REQUEST_SUCCESS,
    CART_REMOVE_REQUEST_FAIL
} from "./../constants/cartConstants";
export const cartReducer = (
    state = { cartItem: [] },
    { type, payload }) => {
    switch (type) {
        case CART_REQUEST: return { ...state, isLoading: true }
        case CART_REQUEST_SUCCESS: 
        const index = state.cartItem.findIndex(item => item.id === payload.id)
        if (index >= 0) {
            state.cartItem[index].qty += payload.qty
            return {
                ...state,
                isLoading: false,
                cartItem: [...state.cartItem]

            }
        } else {
            return {
                ...state,
                isLoading: false,
                cartItem: [...state.cartItem, payload]
            }   
        }
        case CART_REQUEST_FAIL: return {
            ...state,
            isLoading: true,
            error: payload
        }
        case CART_REMOVE_REQUEST: return {
            ...state,
            isLoading: true
        }
        case CART_REMOVE_REQUEST_SUCCESS: return {
            ...state,
            isLoading: false,
            cartItem: payload
        }
        case CART_REMOVE_REQUEST_FAIL: return {
            ...state,
            isLoading: false,
            error: payload
        }
        case CART_EMPTY: return { cartItem: [] }
        default: return state
    }
}