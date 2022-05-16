import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants"

export const userLoginAction = (email, password) => async dispatch => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST })
		const { data } = await axios.post("http://localhost:5000/login", { email, password })
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data
		})
		localStorage.setItem("user", JSON.stringify(data))
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload: error
		})

	}
}