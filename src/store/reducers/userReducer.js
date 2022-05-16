import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants"

export const userReducer = (state = {user:[]}, {type,payload}) => {
	switch (type) {
		case USER_LOGIN_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case USER_LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				user: payload
			}
		case USER_LOGIN_FAIL:
			return {
				...state,
				isLoading: false,
				error: payload
			}
		default:
			return state
	}
}