import { NavLink } from "../../components/NavLink"

const activeStyle = {
	background: "#00000010",
}

export function UsersNavBar() {
	return (
		<div style={{ background: "lightblue", padding: 20 }}>
			<NavLink to="/users/premium" activeStyle={activeStyle}>
				Premium Users
			</NavLink>
			<br />
			<NavLink to="/users/regular" activeStyle={activeStyle}>
				Regular Users
			</NavLink>
		</div>
	)
}
