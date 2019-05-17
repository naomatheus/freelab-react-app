import React, { Component } from 'react';

class Login extends Component {
	constructor(props){
		super(props)

		this.state = {
			username: '',
			password: ''
		};
	}

	// handleLogin = (e) => {
	// 	console.log(e, '<-- login being pressed in the handleLogin function');
	// 		this.props.login();
	// }

	handleSubmit = async (e) => {
		e.preventDefault();
		// console.log('the submit button was pressed in the login form');

		// console.log(this.state, '<-- this is this.state before the route hits server');

		/// this.state is now being set!

		try {
			console.log('trying route');
			const loginResponse = await fetch(`${process.env.REACT_APP_EXPRESS_API_URL}/auth/login`, {
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
			
			// get username and userid and any other user info from backend response 
			const loggedInUser = parsedLogin.data.username;
			const userId = parsedLogin.data.usersDbId;


			// THEN invoke this.props.login() and pass in as arguments whatever user data your front end needs so that it is stored in state at APP level 

			this.props.login( loggedInUser, userId
				/*get these from the response username,userId*/)

		} else if (!parsedLogin.loginData) {
			console.log('login did not work');

			/// something else that lets the user know they failed ot login correctly 
			

		}

		} catch (err){
			console.log(err);
		}
	};

	handleChange = (e) => {
		
		// console.log(e.target.value, '<-- this is event');
		this.setState({
			// computed property syntax
			[e.target.name] : e.target.value
		})
	}

	render(){
		// const loginSuccess=this.props.loginSuccess
		return (

			<div>
				<small>Already have an account?</small>
				<h2>Login!</h2>
				<form 
				onSubmit={this.handleSubmit}>
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