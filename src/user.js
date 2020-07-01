class User {
	constructor(user) {
		this.id = user.id
		this.name = user.name
		this.email = user.email
		this.password = bio.password_digest
		this.bio = user.bio
	}

	renderUser() {

	}
// name email password password conf 
	renderSignUpForm() {
			console.log('renderSignUpForm')
			const signUpForm =  `
				
				<h1>Sign Up</h1>
				<form name="signup">
				   <label>Name</label>
				   <input type="text" value="${this.name}"><br>

				   <label>Email</label>
					 <input type="text" value="${this.email}"/></br>

					 <label>Password</label>
					 <input type="text" value= "${this.password_digest}/>

					<button type='submit'>SignUp</button>
				</form>
				`
			return signUpForm	
	}
		
		// create event listener -- when sign up is hit, go to this form 

}

// 	renderSiteCards() {	
// 		// console.log('${site.id}')
// 		const card =  `
			
// 			<p>${this.id}</p>
// 			<p>${this.name}</p>
// 			<img src=${this.image}>
// 			<button class="site-to-show-page-button" data-id=${this.id}>Visit/Write about this site</button>	
// 			`
// 		return card	
// 	}
	
// 	renderShowPage() {
// 		console.log('renderShowPage')
// 		const writingCard =  `
// 			<img src=${this.image}>
// 			<p> ${this.description} </p> 
// 			<form data-id=${this.id}>
// 			   <label>My Writing about ${this.name}</label><br><br>
// 	  	       <textarea id="note name="note" rows="50" cols="50"></textarea>
// 		       </p>
// 			<button type='submit'>Save Note</button>
// 			</form>
// 			`
// 		return writingCard	
// 	}

// 	static findById(id) {
// 	  return this.allSites.find(site => site.id === id)
// 	}
// }	
	
// Site.allSites = []

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
