import { Outlet } from "react-router-dom"
import { UsersNavBar } from "./UsersNavBar"

export function Users() {
	return (
		<div style={{ display: "flex" }}>
			<UsersNavBar />
			<Outlet />
		</div>
	)
}
