//how should I start? by sketching what I want it to look like and do 
//on window load, do I see a signin? 

const baseURL = "http://localhost:3000/"
const usersURL = `${baseURL}/users`
const sitesURL = `${baseURL}/sites` 
const notesURL = `${baseURL}/notes`

let card = document.querySelector(".underground-railroad-cards")


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
				card = newSite.renderSiteCard()
			})
		})

	}
 
 // function openWritingForm() {

	//  (".open-writing-form").addEventListener('click', () => renderNoteForm())
 // }

//need to get the event.target or something else, this is where it gets complex. but add the form first 

// function saveNewNote() {
// 	fetch(...)
// }

		// writingPrompt.addEventListener('click', () => renderNoteForm())


const openNewNote = (event) => {
			
	console.log('writingForm')

}
	//when clicked, add a writing form to the DOM -- renderNoteForm, 
	//which has a submit, which calls a fetch post 

	//insert "form" with title, body 
	
	// andit will need a Post fetch, with options 



		//HERE< old way was the long stretch of code, new will be the 
			//make an instance of the class sitecard class )

