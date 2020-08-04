class User {
	constructor(user) {
		this.id = user.id
		this.name = user.name
		this.email = user.email
		this.password = user.password_digest
		this.bio = user.bio
		// this.renderSignUpForm = this.renderSignUpForm.bind(this)
	}

	renderSignUpForm() {
		console.log('renderSignUpForm')
		const signUpForm =  `
			
			<h1>Sign Up</h1>
			<form name="signup">
			   <label>Name</label>
			   <input type="text" value="${this.name}"><br>

			   <label>Email</label>
				 <input type="text" value="${this.email}"/></br>

				 <label>Create password</label>
				 <input type="text" value= "${this.password_digest}/>
					
				<button type='submit'>SignUp</button>
			</form>
			`
		return signUpForm	
	}
}

