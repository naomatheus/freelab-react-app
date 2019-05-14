import React, { Component } from 'react';

class Login extends Component {
	constructor(){
		super()

		this.state = {
			username: '',
			password: ''
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		console.log('the submit button was pressed in the login form');

		try {

			const loginResponse = await fetch('http://localhost:3000/auth/login', {
				method: 'POST',
				credentials: 'include',
				// send the cookie with EVERY request
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type':'application/json'
					}
				})

		const parsedLogin = await loginResponse.json();

		if (parsedLogin.data.loginData === true){
			console.log('user was logged in via React Login form, check the DB for this user');

		}

		} catch (err){
			console.log(err);
		}
	};

	handleChange = (e) => {
		
		console.log(e.target.value, '<-- this is event');
		this.setState({
			// computed property syntax
			[e.target.name] : e.target.value
		})
	}

	render(){

		return (

			<div>
				This is the Login container
				<form onSubmit={this.handleSubmit}>
					<input 
						type='text' 
						placeholder='username'
						onChange={this.handleChange}
					/>
					<br/>

					<input 
						type='password'
						placeholder='password'
						onChange={this.handleChange}
					/> 
					<br/>

					<button type='submit'>Login</button>
				</form>
			</div>
		)
	}


}


export default Login;