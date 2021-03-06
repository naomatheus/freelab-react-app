import React, { Component, Fragment } from 'react';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog'
import IntroBubble from '../Introduction/IntroStyles'

class Register extends Component {
	constructor(){
		super();

		this.state = {
			name:'',
			username:'',
			password:'',
			zipCode:'',
			email:'',
			message: ''
		};
	}

	handleSubmit = async (e) => {

		e.preventDefault();
		
		console.log('registration form attempting create user');
		try {

			const registerResponse = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL}/auth/register`, {
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
				console.log('registration was successful');
				this.setState({
					message: 'Registration successful!'
				})
				console.log(parsedRegistration, '<-- this is new user data');
			} else if (!parsedRegistration.data._id){
				console.log('there was an issue with registering');
			}

		} catch (err){

		}

	}

	handleChange = (e) => {
		
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	render() {
		return (

			<IntroBubble>
				<h3>Register for Freelab</h3>

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
				{ 
				this.state.message != '' ? 
					<div>
						{this.state.message}
					</div> 
				:
				false 
				}

			</IntroBubble>
		)

	}
}


export default Register;