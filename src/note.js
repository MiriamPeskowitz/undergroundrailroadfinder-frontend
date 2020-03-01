class Site {
	constructor(noteObject) {
		this.id = noteObject.id
		this.title = noteObject.title
		this.body = noteObject.body
		this.userId = siteObject.user_id
		this.siteId = siteObject.site_id
		Note.allNotes.push(this)//clarify what this does and whether I need it 
	}
	renderNoteForm = (siteId) => {
		//takes in a userId and a siteId
		//1 add form to html 
	const f = document.createElement("form");
	
	const titleInput = document.createElement("input");
	titleInput.setAttribute('type', 'text')
	titleInput.setAttribute('name', 'title')
	titleInput.setAttribute('placeholder', 'title/site name')
			//label
			
	const bodyInput = document.createElement('textarea')	
	bodyInput.setAttribute('name', 'body')
	bodyInput.setAttribute('placeholder', 'Your words go here')	
			//label
			
	const saveInput = document.createElement('input')
	saveInput.setAttribute('type', 'submit')
	saveInput.setAttribute('value', 'save')		
			
	const noteFormSection = document.querySelector("#note-form")
	
	//add three elements to noteFormSection
	noteFormSection.appendChild(titleInput)
	noteFormSection.appendChild(bodyInput)
	noteFormSection.appendChild(saveInput)
		
	}

	submitNewNote = () => {
		//fetch post 
	}
}