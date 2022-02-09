import "./App.css"
import { Login } from "./views/Login"
import { Users } from "./views/Users"
import { Link, Route, Routes } from "react-router-dom"
import { UserDetails } from "./views/UserDetails"
import { UsersContainer } from "./components/UsersContainer"

function App() {
	return (
		<>
			<div style={{ padding: "40px" }}>
				<nav
					style={{
						borderBottom: "solid 1px",
						paddingBottom: "1rem",
					}}
				>
					<Link to="/login">Login</Link> | <Link to="/users">Users</Link>
				</nav>
				<div style={{ display: "flex" }}>
					<div>
						<Routes>
							<Route path="/" element={<h1>HOME</h1>} />
							<Route path="/login" element={<Login />} />
							<Route path="/users" element={<UsersContainer />}>
								<Route path="*" element={<Users title="Regular Users" />} />
								<Route path="/users/regular" element={<Users title="Regular Users" />} />
								<Route path="/users/premium" element={<Users title="Premium Users" />} />
								<Route path="/users/details/:userId" element={<UserDetails />} />
							</Route>
						</Routes>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
