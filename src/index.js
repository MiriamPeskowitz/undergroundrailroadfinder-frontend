//how should I start? by sketching what I want it to look like and do 
//on window load, do I see a signin? 

const baseURL = "http://localhost:3000/"
const usersURL = `${baseURL}/users`
const sitesURL = `${baseURL}/sites` 

document.addEventListener('DOMContentLoaded', () => {
	//Should it do anything else on load? 
	loadAllCards()
})

function loadAllCards() {
    fetch(sitesURL)
	    .then(response => response.json())

		.then(siteCardJSON => {
			siteCardJSON.forEach((site) => {
				const newSite = new Site(site)
				
				let card = document.querySelector(".underground-railroad-cards")
				card = newSite.renderSiteCard()
			})
		})

	}

const write = document.querySelector('.writingPrompt')
write.addEventListener('click', openJournal())

const openJournal = () => {
	//insert "form" with title, body 
	//is this a new class? note.js yes. 
	// andit will need a Post fetch, with options 
	
}

		//HERE< old way was the long stretch of code, new will be the 
			//make an instance of the class sitecard class )

