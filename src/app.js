class App {
	constructor() {
		this.adapter = new Adapter()
		this.createSites = this.createSites.bind(this)
		this.addSites = this.addSites.bind(this)
		this.openShowPage = this.openShowPage.bind(this)
		this.attachEventListeners = this.attachEventListeners.bind(this)
	}

 //  	this.handleEditClick = this.handleEditClick.bind(this)
 //  	this.handleFormSubmit = this.handleFormSubmit.bind(this)

	attachEventListeners() {
		console.log("attached")
		document.querySelector('#underground-railroad-cards').addEventListener('click', this.openShowPage)
	}
 //  attachEventListeners() {
 //    document.querySelector('#notes-list').addEventListener('click', this.handleEditClick)
	// // grab updated title and content and send to db
 //    document.querySelector('#update').addEventListener('submit', this.handleFormSubmit)
 // }
	createSites(sites) {
		console.log('createSites')
		sites.forEach(site => {
			new Site(site)
		});
		this.addSites()
	}

	addSites() {
		console.log('addSites')
		document.querySelector('#underground-railroad-cards').innerHTML = ""
		Site.allSites.forEach(site => ( document.querySelector('#underground-railroad-cards').innerHTML += site.renderSiteCards())
		)
	}

	openShowPage(e) {
		console.log("openShowPage")
    const id = parseInt(e.target.dataset.id)
    const site = Site.findById(id)
    document.querySelector('#underground-railroad-cards').innerHTML= site.renderShowPage()
 	}	 

}

// document.querySelector('#underground-railroad-cards').innerHTML += site.renderSiteCards()

	// createNotes(notes) {
	// 	notes.forEach(note => {
	// 		new Note(note)
	// 		});
	// 	this.addNotes()
	// }

	// addNotes() {
	// 	document.querySelector('#notes-list').innerHTML = " "
	// 	Note.all.forEach(
	// 		note => (document.querySelector('#notes-list').innerHTML += note.renderListItem())
	// 	)
	// }

 // handleFormSubmit(e) {
	// 	e.preventDefault()
	// 	const id = parseInt(e.target.dataset.id)
	// 	const note = Note.findById(id)
	// 	const title = e.target.querySelector('input').value
 //    const content = e.target.querySelector('textarea').value
	// 	const bodyJSON = {title, content}
        
 //        // backend responds with the updated note instance represented as JSON
 //    this.adapter.updateNote(note.id, bodyJSON)
 //     .then(updatedNote => {
 //    		const note = Note.findById(updatedNote.id)
 //    		note.update(updatedNote)
 //    		this.addNotes()
 //      })
	// 	}	   

	// handleEditClick(e) {
 //    const id = parseInt(e.target.dataset.id)
 //    const note = Note.findById(id)
 //    document.querySelector('#update').innerHTML = note.renderUpdateForm()
 // 		}	 
 // }