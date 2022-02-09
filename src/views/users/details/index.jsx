import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { clearUserDetails, setUserDetails } from "../../../store/users/userDetailsReducer"
import { getApi } from "../../../utils/api"

export function UserDetails() {
	const dispatch = useDispatch()
	const userData = useSelector((state) => state.userDetailsReducer)
	const { userId } = useParams()

	useEffect(() => {
		getApi(`https://reqres.in/api/users/${userId}`)
			.then((data) => dispatch(setUserDetails(data.data)))
			.catch((err) => console.log(err))

		return () => dispatch(clearUserDetails())
	}, [userId, dispatch])

	if (!userData) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<h2>
				{userData.first_name} {userData.last_name}
			</h2>
			<div style={{ display: "flex" }}>
				<img style={{ height: 100, margin: 10 }} alt="avatar" src={userData.avatar}></img>
				<div>
					<div>ID: {userData.id}</div>
					<div>Email: {userData.email}</div>
				</div>
			</div>
		</div>
	)
}
