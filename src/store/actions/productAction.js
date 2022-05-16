import axios from "axios"
import { PRODUCT_REQUEST, PRODUCT_REQUEST_FAIL, PRODUCT_REQUEST_SUCCESS, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_REQUEST_FAIL, SINGLE_PRODUCT_REQUEST_SUCCESS } from "../constants/productConstants"

export const productAction = () => async dispatch => {
    try {
        dispatch({ type: PRODUCT_REQUEST })
        const { data } = await axios.get("/products")
        dispatch({
            type: PRODUCT_REQUEST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_REQUEST_FAIL,
            payload: error
        })

    }
}
export const singleProductAction = id => async dispatch => {
    try {
        dispatch({ type: SINGLE_PRODUCT_REQUEST })
        const { data } = await axios.get(`/products/${id}`)
        dispatch({
            type: SINGLE_PRODUCT_REQUEST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SINGLE_PRODUCT_REQUEST_FAIL,
            payload: error
        })

    }
}
