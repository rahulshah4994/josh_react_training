import { useReducer } from "react"
import * as yup from "yup"

const initialState = { email: "", password: "", emailError: "", passwordError: "" }

const constants = {
	SET_EMAIL: "SET_EMAIL",
	SET_PASSWORD: "SET_PASSWORD",
	SET_EMAIL_ERROR: "SET_EMAIL_ERROR",
	SET_PASSWORD_ERROR: "SET_PASSWORD_ERROR",
	RESET: "RESET",
}

const reducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case constants.SET_EMAIL:
			return { ...state, email: payload }
		case constants.SET_PASSWORD:
			return { ...state, password: payload }
		case constants.SET_EMAIL_ERROR:
			return { ...state, emailError: payload }
		case constants.SET_PASSWORD_ERROR:
			return { ...state, passwordError: payload }
		case constants.RESET:
			return initialState
		default:
			return state
	}
}

export function Login({ onLoginSuccess }) {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { email, password } = state

	const setEmail = (payload) => {
		dispatch({ type: constants.SET_EMAIL, payload })
	}

	const setPassword = (payload) => {
		dispatch({ type: constants.SET_PASSWORD, payload })
	}

	// const setEmailError = (payload) => {
	// 	dispatch({ type: constants.SET_EMAIL_ERROR, payload })
	// }

	// const setPasswordError = (payload) => {
	// 	dispatch({ type: constants.SET_PASSWORD_ERROR, payload })
	// }

	const validationSchema = yup.object().shape({
		email: yup.string().email().required(),
		password: yup.string().min(8).required(),
	})

	const handleValidationErrors = (validationError) => {}

	const onLoginSubmit = (e) => {
		e.preventDefault()
		//Validate schema using yup
		validationSchema
			.validate({ email, password }, { abortEarly: false })
			.then(() => onLoginSuccess())
			.catch((err) => handleValidationErrors(err))
		//If invalid, handle errors
		//If valid, call Login success
		// onLoginSuccess()
	}

	return (
		<form onSubmit={onLoginSubmit}>
			<h2>Login</h2>
			<div>
				<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				<button type="button" onClick={() => setEmail("")}>
					&times;
				</button>
			</div>
			<div>
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button type="button" onClick={() => setPassword("")}>
					&times;
				</button>
			</div>
			<div>
				<button type="submit">Submit</button>
				<button type="reset">Reset</button>
			</div>
		</form>
	)
}
