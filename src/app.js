class App {
	constructor() {
		this.adapter = new Adapter()
		this.createSites = this.createSites.bind(this)
		this.addSitesToPage = this.addSitestoPage.bind(this)
		this.attachEventListeners = this.attachEventListeners.bind(this)
		this.openShowPage = this.openShowPage.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.openSignUpForm = this.openSignUpForm.bind(this)
		this.closeAndReturnToFullList = this.closeAndReturnToFullList.bind(this)
	}

 //  	this.handleEditClick = this.handleEditClick.bind(this)
 //  	this.handleFormSubmit = this.handleFormSubmit.bind(this)

	attachEventListeners() {
		// console.log("attached")
		document.querySelector('#underground-railroad-cards').addEventListener('click', this.openShowPage)
		document.querySelector('#underground-railroad-cards').addEventListener('submit', this.handleFormSubmit)
		document.querySelector('#signup').addEventListener('click', this.openSignUpForm)
		// document.querySelector("#return-to-list").addEventListener('click', this.closeAndReturnToFullList)
	}
 

	closeAndReturnToFullList() {
		console.log('return to fullList')
		//future feature: alert-- are you sure, save first
		//toggle out of show page -- by making innerHTML empty 
		// document.querySelector('#underground-railroad-cards').innerHTML = ' '


	}   

	createSites(sites) {
		// console.log('createSites')
		sites.forEach(site => {
			new Site(site)
		});
		this.addSitestoPage()
	}

	addSitestoPage() {
		// console.log('addSites')
		document.querySelector('#underground-railroad-cards').innerHTML = ""
		Site.allSites.forEach(site => ( document.querySelector('#underground-railroad-cards').innerHTML += site.renderSiteCards())
		)
	}
//click image => openShowPage 
	openShowPage(e) {
		console.log("openShowPage")
	    const id = parseInt(e.target.dataset.id)
	    const site = Site.findById(id)
	    document.querySelector('#underground-railroad-cards').innerHTML = site.renderShowPage()
	 }	 

//future: consolidate this with 
	openSignUpForm() {
		console.log('open sign up form ')
	    document.querySelector('#signup').innerHTML = user.renderSignUpForm()    
	}

	handleFormSubmit(e) {
		e.preventDefault()
		const id = parseInt(e.target.dataset.id)
		const note = Note.findById(id) //Think about this 
    	const content = e.target.querySelector('textarea').value
		const bodyJSON = {content}
        // START HERE< BUILD OUT NOTES, maybe user and profile first? 
        // backend responds with the updated note instance represented as JSON
    	this.adapter.postNewNote(note.id, bodyJSON)//think about whether to keep it as site or note 
    //all this -- think about what to do, may need to hash out the note.js section 
     	.then(updatedNote => {
    		const note = Note.findById(updatedNote.id)
    		note.update(updatedNote)
    		this.addNotes()
      })
	}	

}
