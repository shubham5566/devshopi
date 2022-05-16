import {
    CART_REQUEST,
    CART_REQUEST_FAIL,
    CART_REQUEST_SUCCESS,
    CART_EMPTY,
    CART_REMOVE_REQUEST,
    CART_REMOVE_REQUEST_SUCCESS,
    CART_REMOVE_REQUEST_FAIL
} from "../constants/cartConstants"

export const cartAction = product => async (dispatch,getState) => {
    try {
        dispatch({ type: CART_REQUEST })
        dispatch({ type: CART_REQUEST_SUCCESS, payload: product })
        const {cartItem} = getState().cart
        localStorage.setItem("localCart", JSON.stringify(cartItem))
    } catch (error) {
        dispatch({ type: CART_REQUEST_FAIL, payload: error })
    }
}
export const removeCartItemAction = id => async (dispatch, getState) => {
    try {
        dispatch({ type: CART_REMOVE_REQUEST })
        const { cartItem } = getState().cart
        const result = cartItem.filter(item => item.id !== id)
        dispatch({ type: CART_REMOVE_REQUEST_SUCCESS, payload: result })
        localStorage.removeItem("localCart")

    } catch (error) {
        dispatch({ type: CART_REMOVE_REQUEST_FAIL })
    }
}
export const emptyCartAction = () => async dispatch =>{
 dispatch({ type: CART_EMPTY })
localStorage.removeItem("localCart")
}