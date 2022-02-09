export const getApi = (url) => {
	const requestHeaders = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}
	return fetch(url, requestHeaders).then((res) => res.json())
}
