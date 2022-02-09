import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function UserDetails() {
	const params = useParams()
	const userId = params.userId
	const [userData, setUserData] = useState()

	useEffect(() => {
		const requestOptions = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
		fetch(`https://reqres.in/api/users/${userId}`, requestOptions)
			.then((response) => response.json())
			.then((data) => setUserData(data.data))
			.catch((err) => console.log(err))
	}, [userId])

	if (!userData) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<h2>
				{userData.first_name} {userData.last_name}
			</h2>
			<div style={{ display: "flex" }}>
				<img style={{ height: 100, margin: 10 }} src={userData.avatar}></img>
				<div>
					<div>ID: {userData.id}</div>
					<div>Email: {userData.email}</div>
				</div>
			</div>
		</div>
	)
}
