import React, { Component } from 'react';

class UserDetail extends Component {
	constructor(props){
		super(props);


		this.state = {
		/// something maybe 
		// knows who the user is, maybe gets it from App component 
			userId: this.props.userId
		}
	}

	handleLogout = (userId) => {
		
		console.log(userId,'user clicked logout');

		/// makes a fetch request to end the user's session, and changes loggedIn to false

		// call logout in the app component
		this.props.logout(this.state.userId);

	};

	deleteAccount = async (e) => {
		// e.preventDefault();
		try {

			const sentDelete = await fetch('http://localhost:9000/user/' + this.state.userId, {
				method: 'DELETE',
				credentials: 'include',
				body: JSON.stringify({
					userId: this.state.userId
				}),
				headers: {
					'Content-Type' : 'application/json'
				}
		})

		const deletedUser = await sentDelete.json();
		console.log(deletedUser);

		this.handleLogout();


		} catch (err){
			console.error(err)
		}

	};

	render(){
		return(

			<div>
				This is the user details component 
				<button onClick={this.handleLogout}>Logout</button>
				<button onClick={this.deleteAccount}>Delete Account</button>
			</div>

		)
	}



}


export default UserDetail;