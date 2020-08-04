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
	fetchSites() { 
		return this.get(`${this.sitesURL}`).catch((err) => console.log(err))
	}
	
	get(url) { return fetch(url).then(res => res.json()).catch((err) => console.log(err)) }

	// updateNote(id, body) { return this.patch(`${this.baseUrl}/${id}`, body)}

	postNewNote(url, body) {
		fetch(`${this.sitesURL}`, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify(body)
		}).then(res => res.json())
		.catch((err) => console.log(err))
	}
	
	postNewUser(url, body) {
		console.log('postNewUser')
		fetch(`${this.baseURL}/users`, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify(body)
		}).then(res => res.json())
		.catch((err) => console.log(err))
	}
}