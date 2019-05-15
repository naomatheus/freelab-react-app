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
				This is the JobsContainer
				<JobsList />
			</div>
		)
	}
}

export default JobsContainer