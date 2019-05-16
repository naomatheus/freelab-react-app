import React, { Component } from 'react';
import JobsList from '../JobsList';

class JobsContainer extends Component {
	constructor(){
		super();

		this.state = {};
	}

	moveToPrev = () => {
		this.props.moveToPortfolio();
	}

	moveToNext = () => {
		this.props.moveToFinancials();
	}


	render(){
		return (

			<div>
				<h1>This is the JobsContainer</h1>
				<JobsList />
				
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

export default JobsContainer