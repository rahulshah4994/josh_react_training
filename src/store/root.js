import { combineReducers, createStore } from "redux"
import { userDetailsReducer } from "./users/userDetailsReducer"
import { usersReducer } from "./users/usersReducer"

const rootReducer = combineReducers({ usersReducer, userDetailsReducer })

export const store = createStore(rootReducer)
