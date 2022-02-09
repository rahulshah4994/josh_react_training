import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setUsers } from "../../../store/users/usersReducer"
import { getApi } from "../../../utils/api"
import { UserCard } from "./UserCard"

export function UsersList({ title }) {
	const dispatch = useDispatch()
	const users = useSelector((state) => state.usersReducer)

	useEffect(() => {
		getApi("https://reqres.in/api/users")
			.then((data) => dispatch(setUsers(data.data)))
			.catch((err) => console.log(err))
	}, [dispatch])

	return (
		<div>
			<h2>{title}</h2>
			{users.map((user) => (
				<Link to={`/users/details/${user.id}`} key={user.id}>
					<UserCard
						id={user.id}
						first_name={user.first_name}
						last_name={user.last_name}
						email={user.email}
						avatar={user.avatar}
					/>
				</Link>
			))}
		</div>
	)
}
