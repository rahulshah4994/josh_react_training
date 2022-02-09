import { actions } from "../actions"

const initialState = null

export const userDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.SET_USER:
			return action.payload
		case actions.CLEAR_USER:
			return null
		default:
			return state
	}
}

export const setUserDetails = (payload) => ({ type: actions.SET_USER, payload })

export const clearUserDetails = () => ({ type: actions.CLEAR_USER })
