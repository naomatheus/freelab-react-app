import React, { Component } from 'react';

class UserDetail extends Component {
	constructor(props){
		super(props);


		this.state = {
		
			userId: this.props.userId
		}
	}

	handleLogout = (userId) => {
				
		this.props.logout(this.state.userId);

	};

	deleteAccount = async (e) => {
		
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
			
			this.handleLogout();


		} catch (err){
			console.error(err)
		}

	};

	render(){
		return(

			<div>
				
				<button onClick={this.handleLogout}>Logout</button>
				<button onClick={this.deleteAccount}>Delete Account</button>
			</div>

		)
	}
}


export default UserDetail;