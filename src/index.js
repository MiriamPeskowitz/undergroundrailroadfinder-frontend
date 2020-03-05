const baseURL = "http://localhost:3000/"
const usersURL = `${baseURL}/users`
const sitesURL = `${baseURL}/sites` 
const notesURL = `${baseURL}/notes`

let card = document.querySelector(".underground-railroad-cards")

document.addEventListener('DOMContentLoaded', () => {
	loadAllCards()
})


// const newNote =  document.querySelector("section.open-writing-form")
// newNote.addEventListener('click', () => console.log('here'))

function loadAllCards() {
    fetch(sitesURL)
	    .then(response => response.json())

		.then(siteCardJSON => {
			siteCardJSON.forEach((site) => {
				const newSite = new Site(site)
				card = newSite.renderSiteCard()
			})
		})
		// .catch(error => {
		// 	alert("Uh-oh, loadAllCards didn't work, try again. ")
		// 	console.log(error.message)
		// }) 

}
function renderNewNote() { //wby does this work here, but not when I put in the other js files? 
	 	
	 	// should be note form, with border around it. 
	 	// submit -- gathers data and invokes postNewNote -- in note.json
	
	console.log('got to renderNewNote')
//fetch new notes 

		// .catch(error => {
		// 	alert("Uh-oh, try again.")
		// 	console.log(error.message)
		// }) 
}


//then, a way to see all your writing, and make it into something longer. 
//reflections on spaces 
//next: I've made this about sites near me. Next, I want to head down the Maryland's eastern shore... 


// async function addEL() {
// 	let render = await renderSiteCard()
// 	return await response
// 	window.addEventListener('load', (event) => {
// 	console.log('loaded')
// 	const addHere = document.querySelector('underground-railroad-cards')
// 	const newP = document.createElement('p')
// 	newP.innerHTML = "new element"
// 	addHere.appendChild(newP)
	
// 	})
// }


 //click on open-writing-form, 
 //then in the div write-here gets filled in and put on page , with the form 

 
 	// renderNoteForm(nameSpace, building-data-id) START HERE 

 // function openWritingForm() {

	//  (".open-writing-form").addEventListener('click', () => renderNoteForm())
 // }

//need to get the event.target or something else, this is where it gets complex. but add the form first 

// function saveNewNote() {
// 	fetch(...)
// }

		// writingPrompt.addEventListener('click', () => renderNoteForm())


// const openNewNote = (event) => {
			
// 	console.log('writingForm')

// }
	//when clicked, add a writing form to the DOM -- renderNoteForm, 
	//which has a submit, which calls a fetch post 

	//insert "form" with title, body 
	
	// andit will need a Post fetch, with options 



		//HERE< old way was the long stretch of code, new will be the 
			//make an instance of the class sitecard class )

