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
		
		//put data on the siteDiv. image, name, address, description  
		let src = document.createElement('src')
		src.innerHTML = this.image

		let nameSpace = document.createElement('p')
		nameSpace.innerHTML = this.name
		
		let addressSpace = document.createElement('p')
		addressSpace.innerHTML = this.address

		let descriptionSpace = document.createElement('p')
		descriptionSpace = this.description

		//put it all together
		siteDiv.append(src)
		siteDiv.append(nameSpace)
		siteDiv.append(addressSpace)
		siteDiv.append(descriptionSpace)
		

		//attach sitediv to main section
		const main = document.getElementById("underground-railroad-cards")
		main.appendChild(siteDiv)

	}
}
Site.allSites = []





