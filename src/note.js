class Note {
	constructor(noteObject) {
		this.id = noteObject.id
		this.title = noteObject.title
		this.body = noteObject.body
		this.userId = siteObject.user_id
		this.siteId = siteObject.site_id
		// Note.allNotes.push(this)//clarify what this does and whether I need it 
	}
	
	
	// submitNewNote = () => {
	// 	//fetch post 
	// }
	// renderNoteTemplate = () => {
		
	// }
	


}






// const addNewToy = (toy) => { //toy = event.target
     
//     let configObject = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             'name': toy.name.value,
//             'image': toy.image.value,
//             'likes': 0
//         })
//     }

//   fetch(url, configObject)
// 	.then(response => response.json())
// 	.then(data => {
// 		createToyCard(data)
// 	})
// 	.catch(error => console.log(error.message))
// }


	// const configObjectPatch = {
 //        method: "PATCH",
 //        headers: {
 //            "Content-Type": "application/json",
 //            "Accept": "application/json"
 //        },
 //        body: JSON.stringify({
 //            'likes': newLikes////figure out how to capture current likes 
 //        })
 //    }

 // console.log("newLikes: ", newLikes)
	// fetch(url, configObjectPatch)
	// 	.then(response => response.json())
	// 	.then(data => {(data.likes)
	// 		// event.target.previousElementSibling.innerHTML = `${newLikes} likes`
	// 		// why isn't newLikes coming in here? 
	// 		// const id = event.target.id
	// 		likes.innerHTML = `${newLikes} likes`
	// 	})