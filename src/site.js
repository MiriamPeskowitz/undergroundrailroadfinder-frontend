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
		Site.allSites.push(this)//clarify what this does and whether I need it -- Creates the all 
	}

	renderSiteCards() {	
		// console.log('${site.id}')
		const card =  `
			
			<p>${this.id}</p>
			<p>${this.name}</p>
			<img src=${this.image}>
			<button class="site-to-show-page-button" data-id=${this.id}>Visit/Write about this site</button>	
			`
		return card	
	}
	
	renderShowPage() {
		console.log('renderShowPage')
		const writingCard =  `
			<img src=${this.image}>
			<p> ${this.description} </p> 
			<form data-id=${this.id}>
			   <label>My Writing about ${this.name}</label><br><br>
	  	       <textarea id="note name="note" rows="50" cols="50"></textarea>
		       </p>
			<button type='submit'>Save Note</button>
			</form>
			`
		return writingCard	
	}

	static findById(id) {
	  return this.allSites.find(site => site.id === id)
	}
}	
	
Site.allSites = []

	// card() {
	// 	const cardText = `
	// 	let siteDiv = document.createElement('div')
	// 	siteDiv.setAttribute('class', 'site-card' )
	// 	siteDiv.setAttribute('data-id', ${this.id} )
		
		
	// 	let img = document.createElement('img')
	// 	img.src = this.image
	// 	img.alt = this.name

	// 	let nameSpace = document.createElement('p')
	// 	nameSpace.innerHTML = this.name
		
	// 	let addressSpace = document.createElement('p')
	// 	addressSpace.innerHTML = ${this.address}, ${this.state}, ${this.zipcode}

	// 	let descriptionSpace = document.createElement('p')
	// 	descriptionSpace.innerHTML = "${this.description}"
		
	// 	//visited -- will be a checkbox and these can be added up for a running total 
	// 	// let visited = document.createElement('p')
	// 	// visited.innerHTML= `visited: ${this.visited}`

	// 	let note = document.createElement('section')

		
	// 	note.setAttribute('class', 'note-form' )
	// 	note.setAttribute('building-data-id', ${this.id} )
		
	// 	//put it all together
	// 	siteDiv.append(img)
	// 	siteDiv.append(nameSpace)
	// 	siteDiv.append(addressSpace)
	// 	siteDiv.append(descriptionSpace)
	// 	siteDiv.append(note)
		
	// 	//attach siteDiv to main section
	// 	const main = document.getElementById("underground-railroad-cards")
	// 	main.appendChild(siteDiv)
	// 	`
	// }
