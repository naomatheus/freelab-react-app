import React, { Component } from 'react';

class Register extends Component {
	constructor(){
		super();

		this.state = {
			name:'',
			username:'',
			password:'',
			zipCode:'',
			email:''
		};
	}

	handleSubmit = async (e) => {

		e.preventDefault();
		
		console.log('registration form attempting create user');
		try {

			const registerResponse = await fetch('http://localhost:3000/auth/register', {
				method: 'POST',
				credentials: 'include',
				// send the cookie with EVERY request
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type':'application/json'
				}
			})

			const parsedRegistration = await registerResponse.json();
			console.log(parsedRegistration, '<--- this is the parsedRegistration');

			if (parsedRegistration.data._id){
				console.log('login was successful');
				console.log(parsedRegistration, '<-- this is new user data');
			} else if (!parsedRegistration.data._id){
				console.log('there was an issue with registering');
			}

		} catch (err){

		}

		

	}

	handleChange = (e) => {
		console.log(e.target.value, "<-- this is e.target.value in registration");
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	render() {
		return (

			<div>
				This is the registration container

				<form onSubmit={this.handleSubmit}>
					<input
						name='name'
						type='text'
						onChange={this.handleChange}
						// value=''
						placeholder='Enter Your Full Name'

					/> <br/>
					<input
						name='username'
						type='text'
						onChange={this.handleChange}
						// value=''
						placeholder='Username'

					/> <br/>
					<input
						name='password'
						type='password'
						onChange={this.handleChange}
						// value=''
						placeholder='password'

					/> <br/>
					<input
						name='zipCode'
						type='number'
						onChange={this.handleChange}
						// value=''
						placeholder='Zip Code Required'

					/> <br/>
					<input
						name='email'
						type='email'
						onChange={this.handleChange}
						// value=''
						placeholder='Email Address'
						/// try to use a Regex here to validate the email!
					/> <br/>

					<button type='submit'>Register Account</button>

				</form>

			</div>
		)
	}
}


export default Register;