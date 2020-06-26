class Adapter {
	constructor() {
		this.baseURL = "http://localhost:3000/api/v1"
		this.usersURL = `${this.baseURL}/users`
		this.sitesURL = `${this.baseURL}/sites` 
		this.notesURL = `${this.baseURL}/notes`

		this.headers = {
			'Content-Type': 'application/json',
      Accept: 'application/json',
    }
	}
// Make all api fetches here 
	fetchSites() { return this.get(`${this.sitesURL}`)}

	get(url) { return fetch(url).then(res => res.json()) }

	// updateNote(id, body) { return this.patch(`${this.baseUrl}/${id}`, body)}


	// patch(url, body) {
	// 	return fetch(url, {
	// 		method: 'PATCH',
	// 		headers: this.headers,
	// 		body: JSON.stringify(body),
	// 	})
	// 	.then(res => res.json())
	// }
}