//how should I start? by sketching what I want it to look like and do 
//on window load, do I see a signin? 

const baseURL = "http://localhost:3000/"
const usersURL = `${base_URL}/users`
const sitesURL = `${base_URL}/sites` 

document.addEventListener('DOMContentLoaded', () => {
	//Should it do anything else on load? 
	loadAllCards()
})

function loadAllCards() {
	fetch(sitesURL)
		.then(response => response.json())
		.then(siteCardJSON => {
			siteCardJSON.forEach(site) => {
				const newSite = new Site(site)
				(place in Dom where it should go).innerHTML = newSite.renderSiteCard()
			}
		}



		//HERE< old way was the long stretch of code, new will be the 
			//make an instance of the class sitecard class )
}

