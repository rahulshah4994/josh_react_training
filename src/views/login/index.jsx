import { useReducer } from "react"
import { useNavigate } from "react-router-dom"
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

export function Login() {
	const navigate = useNavigate()
	const [state, dispatch] = useReducer(reducer, initialState)
	const { email, password, emailError, passwordError } = state

	const setEmail = (payload) => {
		dispatch({ type: constants.SET_EMAIL, payload })
	}

	const setPassword = (payload) => {
		dispatch({ type: constants.SET_PASSWORD, payload })
	}

	const setEmailError = (payload) => {
		dispatch({ type: constants.SET_EMAIL_ERROR, payload })
	}

	const setPasswordError = (payload) => {
		dispatch({ type: constants.SET_PASSWORD_ERROR, payload })
	}

	const validationSchema = yup.object().shape({
		email: yup.string().email().required(),
		password: yup.string().min(8).required(),
	})

	const handleValidationErrors = (validationError) => {
		setEmailError("")
		setPasswordError("")
		validationError.inner.forEach((err) => {
			if (err.path === "email") {
				setEmailError(err.errors[0])
			}
			if (err.path === "password") {
				setPasswordError(err.errors[0])
			}
		})
	}

	const onLoginSubmit = (e) => {
		e.preventDefault()
		validationSchema
			.validate({ email, password }, { abortEarly: false })
			.catch((err) => handleValidationErrors(err))
			.then(() => navigate("/users"))
	}

	return (
		<form onSubmit={onLoginSubmit}>
			<h2>Login</h2>
			<div>
				<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				<button type="button" onClick={() => setEmail("")}>
					&times;
				</button>
				{emailError && <div style={{ fontSize: 10, color: "red" }}>{emailError}</div>}
			</div>
			<div>
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button type="button" onClick={() => setPassword("")}>
					&times;
				</button>
				{passwordError && <div style={{ fontSize: 10, color: "red" }}>{passwordError}</div>}
			</div>
			<div>
				<button type="submit">Submit</button>
				<button type="reset">Reset</button>
			</div>
		</form>
	)
}
