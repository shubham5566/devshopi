import { createStore, combineReducers, applyMiddleware } from "redux"

import { composeWithDevTools } from "redux-devtools-extension"

import thunk from "redux-thunk"
import { cartReducer } from "./reducers/cartReducer"
import { productReducer } from "./reducers/productReducer"
import { userReducer } from "./reducers/userReducer"
const localCartData = localStorage.getItem("localCart") ? JSON.parse(localStorage.getItem("localCart")) : []
const localUserData = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
const initialState = {
    cart:{cartItem:localCartData},
    userData:{user:localUserData}
}
const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    userData:userReducer
})
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store