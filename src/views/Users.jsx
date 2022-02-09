import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserCard } from "../components/UserCard"

export function Users({ title }) {
	const [users, setUsers] = useState([])
	const navigate = useNavigate()

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

	const navigateToUserDetails = (userId) => {
		navigate(`/users/details/${userId}`)
	}

	return (
		<div>
			<h2>{title}</h2>
			{/* Map out all users fetched */}
			{users.map((user) => (
				<div onClick={() => navigateToUserDetails(user.id)}>
					<UserCard
						id={user.id}
						first_name={user.first_name}
						last_name={user.last_name}
						email={user.email}
						avatar={user.avatar}
					/>
				</div>
			))}
		</div>
	)
}
