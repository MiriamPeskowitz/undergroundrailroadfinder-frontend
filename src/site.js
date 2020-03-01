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

		let writingPrompt = document.createElement('p')
		writingPrompt.innerHTML = "Click here to write about this site."
		writingPrompt.setAttribute('class', 'open-writing-form' )
		writingPrompt.setAttribute('building-data-id', `${this.id}` )


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
	}
}
Site.allSites = []





