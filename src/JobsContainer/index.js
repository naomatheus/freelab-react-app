import React, { Component } from 'react';
import JobsList from '../JobsList';

class JobsContainer extends Component {
	constructor(){
		super();

		this.state = {};
	}


	render(){
		return (

			<div>
				<h1>This is the JobsContainer</h1>
				<JobsList />
				<button
					id='next'
					onClick={this.moveToNext}>
					Next
				</button>
				<button
					onClick={this.moveToPrevious}
					id='previous'>
					Previous
				</button>
			</div>
		)
	}
}

export default JobsContainer