import { useEffect, useState } from "react"
import { UserCard } from "../components/UserCard"

export function Users() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		//fetch users
		const requestOptions = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
		fetch("https://reqres.in/api/users", requestOptions)
			.then((response) => response.json())
			.then((data) => setUsers(data.data))
			.catch((err) => console.log(err))
	}, [])

	return (
		<div>
			<h2>Users</h2>
			{/* Map out all users fetched */}
			{users.map((user) => (
				<UserCard
					id={user.id}
					first_name={user.first_name}
					last_name={user.last_name}
					email={user.email}
					avatar={user.avatar}
				/>
			))}
		</div>
	)
}
