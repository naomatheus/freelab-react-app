import React, { Component } from 'react';


class Financials extends Component {
	constructor(){
		super();

		this.state = {

		};
	}

	moveToPrev = () => {
		this.props.moveToJobsContainer();
	}

	moveToNext = () => {
		this.props.moveToMotivation();
	}

	render(){
		return(

			<div>
				<h1>This is the financials component</h1> 
				<div className='card-display'>Set Your Prices card-display</div>
				<div className='card-display'>Develop invoicing template card-display</div>
				<div className='card-display'>Accounting software card-display</div>
				<div className='card-display'>CMS (Streak) card-display</div>
				<div className='card-display'>Project Mgmt card-display</div>
				
				<button
					id='previous'
					onClick={this.moveToPrev}>
					Previous
				</button>
				<button
					id='next'
					onClick={this.moveToNext}>
					Next
				</button>
			</div>
		)
	}
}



export default Financials;