class Site {
	constructor(siteObject) {
		this.id = siteObject.id
		this.name = siteObject.name
		this.address = siteObject.address
		this.city = siteObject.city
		this.state = siteObject.state
		this.zipcode = siteObject.zipcode
		this.description = siteObject.description 
		this.visited = siteObject.visited
		this.image = siteObject.image
		this.noteTitle = siteObject.notes.title
		this.noteBody = siteObject.notes.body
		// this.renderNoteForm = siteObject.renderNoteForm// trying to solve problem: how do I bring in this object
		//since note is associated with site 
		Site.allSites.push(this)//clarify what this does and whether I need it 
	}

	

	renderSiteCard = () => {
		//create container card for each site  
		let siteDiv = document.createElement('div')
		siteDiv.setAttribute('class', 'site-card' )
		siteDiv.setAttribute('data-id', `${this.id}` )
		
		//put data on the siteDiv. image, name, address, description, etc
		let img = document.createElement('img')
		img.src = this.image
		img.alt = this.name

		let nameSpace = document.createElement('p')
		nameSpace.innerHTML = this.name
		
		let addressSpace = document.createElement('p')
		addressSpace.innerHTML = `${this.address}, ${this.state}, ${this.zipcode}`

		let descriptionSpace = document.createElement('p')
		descriptionSpace.innerHTML = this.description
		
		let visited = document.createElement('p')
		visited.innerHTML= this.visited

		let writingPrompt = document.createElement('section')

		writingPrompt.innerHTML = "Write about this site, its story, your story of seeing it. Who are the people in the story? How does this site tell the story of those people? Would you tell it differently? How does this place fit into other places and histories you've seen and know?"
		writingPrompt.setAttribute('class', 'writing-form' )
		writingPrompt.setAttribute('building-data-id', `${this.id}` )
		

		//nmake this a form . 
		let title = document.createElement('h2')

		title.innerHTML = "title"
		writingPrompt.appendChild(title)

		
		let noteBody = document.createElement('p')
		noteBody.innerHTML = "text here"
		writingPrompt.appendChild(noteBody)
		

		//how will site.js know about renderNoteForm, which is created on note.js? 
		// writingPrompt.addEventListener('click', renderNoteForm(nameSpace, building-data-id))
		//when clicked a  form/ 

		//add other attributes, like the visited boolean 

		//put it all together
		siteDiv.append(img)
		siteDiv.append(nameSpace)
		siteDiv.append(addressSpace)
		siteDiv.append(descriptionSpace)
		siteDiv.append(writingPrompt)
		


		//attach siteDiv to main section
		const main = document.getElementById("underground-railroad-cards")
		main.appendChild(siteDiv)
		
		renderNewNote()
		// console.log("second")
		
		}


}
// 		//takes in a userId and a siteId
// 		//1 add form to html 
// 		console.log('renderNoteForm')
		


Site.allSites = []





