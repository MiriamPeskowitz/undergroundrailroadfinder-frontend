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
		Site.allSites.push(this)
	}

	renderSiteCard = () => {
		//create container card for each site  
		let siteDiv = document.createElement('div')
		div.setAttribute('class', 'site-card' )
		div.setAttribute('data-id', `${this.id}` )
		
		//put data on the siteDiv. image, name, address, description 
		//create image 
		let src = this.image
		let name = this.name
		let address = this.address
		let description = this.description
		siteDiv.appendChild(src, name, address, description)
			

		//attach to main section
		const main = document.getElementById("underground-railroad-cards")
		main.appendChild(siteDiv)

	}
}
Site.allSites = []





