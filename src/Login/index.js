import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
// import { IntroBubble, FormStyle } from '../Introduction/IntroStyles.js'
import IntroBubble from '../Introduction/IntroStyles'
import FormStyle from '../Introduction/IntroStyles'


class Login extends Component {
	constructor(props){
		super(props)

		this.state = {
			username: '',
			password: '',
			message: ''
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();

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
			
			// gets username and userid from backend response 
			const loggedInUser = parsedLogin.data.username;
			const userId = parsedLogin.data.usersDbId;


			//invokes this.props.login()

			this.props.login( loggedInUser, userId)

		} else if (!parsedLogin.loginData) {
			console.log('login did not work');

			this.setState({
				message: 'Login failed due to incorrect username or password. Try again!'
			})
		
		}

		} catch (err){
			console.log(err);
		}
	};

	handleChange = (e) => {
		
		
		this.setState({
			// computed property syntax
			[e.target.name] : e.target.value
		})
	}

	render(){
		
		return (
			<Fragment>
				<IntroBubble>
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

					{this.state.message != '' ? 
						 <div>{this.state.message}
						 </div>
					:
						null
					}
				</IntroBubble>
				<FormStyle>
					<p> working? </p>
					<input
						name='hey'
					/>
				</FormStyle>
			</Fragment>
		)
	}
}


export default Login;