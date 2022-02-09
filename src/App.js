import "./App.css"
import { Login } from "./views/Login"
import { useEffect, useState } from "react"
import { Users } from "./views/Users"

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const hasLoggedInBefore = localStorage.getItem("isLoggedIn")
		if (hasLoggedInBefore) setIsLoggedIn(true)
	}, [])

	const onLoginSuccess = () => {
		setIsLoggedIn(true)
		localStorage.setItem("isLoggedIn", true)
	}

	if (isLoggedIn) {
		return (
			<div style={{ padding: "40px" }}>
				<Users />
			</div>
		)
	} else {
		return (
			<div style={{ padding: "40px" }}>
				<Login onLoginSuccess={onLoginSuccess} />
			</div>
		)
	}
}

export default App
