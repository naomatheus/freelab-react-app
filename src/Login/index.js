import React, { Component } from 'react';

class Login extends Component {
	constructor(){
		super()

		this.state = {
			username: '',
			password: ''
		};
	}

	handleSubmit = (e) => {
		console.log(e);
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