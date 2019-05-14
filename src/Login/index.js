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

		console.log(this.state, '<-- this is this.state before the route hits server');

		/// this.state is now being set!

		try {
			console.log('trying route');
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
			console.log(parsedLogin, '<-- this is parsedlogin');
		if (parsedLogin.loginData === true){
			console.log('user was logged in via React Login form, check the DB for this user');

		} else if (!parsedLogin.loginData) {
			console.log('login did not work');
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
						name='username'
						type='text' 
						placeholder='username'
						onChange={this.handleChange}
					/>
					<br/>

					<input 
						name='password'
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