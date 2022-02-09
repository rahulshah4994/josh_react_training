import { actions } from "../actions"

const initialState = []

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.SET_USERS:
			return [...action.payload]
		default:
			return state
	}
}

export const setUsers = (payload) => ({
	type: actions.SET_USERS,
	payload,
})
