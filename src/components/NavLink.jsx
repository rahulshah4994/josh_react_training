import { NavLink as AppNavLink } from "react-router-dom"

export function NavLink({ activeStyle, ...props }) {
	return <AppNavLink {...props} style={({ isActive }) => (isActive ? activeStyle : undefined)} />
}
