class Adapter {
	constructor() {
		this.baseURL = "http://localhost:3000/api/v1"
		// refactor these next three away?
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
		return this.get(`${this.baseURL}/sites`)
	}
	
	get(url) { return fetch(url).then(res => res.json()) }

	// updateNote(id, body) { return this.patch(`${this.baseUrl}/${id}`, body)}

	postNewNote(url, content) {
		fetch(`${this.baseURL}/sites`, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify({content})
		}).then(res => res.json()).catch()
	}

//Add this to end of fetch, get 
  catch() {
  	catch((err) => console.log(err))
  }
	// patch(url, body) {
	// 	return fetch(url, {
	// 		method: 'PATCH',
	// 		headers: this.headers,
	// 		body: JSON.stringify(body),
	// 	})
	// 	.then(res => res.json())
	// }
}