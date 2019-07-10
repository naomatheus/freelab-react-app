import React, { Component } from 'react';
import MainStyles from './MainStyles.js'

class MainContainer extends Component {
	constructor(){
		super();

		this.state = {};
	}

	render(){
		return (

			<MainStyles main>
				<h1>Welcome to Freelab</h1>
				<div className='main-description'>
					Freelab will help you start your freelance career or side gig.
					If you are planning to walk this road, it is possible to have a solid side-gig or full-time freelancing career with the right amount of courage, information, and preparation. 
					<br/>Freelab will help you in the process.
				</div>
			</MainStyles>
		)
	}
}

export default MainContainer