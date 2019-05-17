import React, { Component } from 'react';
import JobsList from '../JobsList';

class JobsContainer extends Component {
	constructor(){
		super();

		this.state = {
			jobs: []
			// , 
			// jobToShow: {
			// 	title:
			// 	type:
			// may not need}
		};
	}

	moveToPrev = () => {
		this.props.moveToPortfolio();
	};

	moveToNext = () => {
		this.props.moveToFinancials();
	};

	componentDidMount(){
		// make the initial fetch of data
		this.getJobs();
	};

	getJobs = async () => {
		
		try {

			const response = await fetch(/*'https://tranquil-waters-21260.herokuapp.com/api/v1/githubJobs/'*/

				'http://localhost:9000/api/v1/githubJobs/', {
				// method: 'GET',
				credentials: 'include'
				// body: JSON.stringify(response),
				// headers: {
				// 	'Content-Type':'application/json'
				}
		)
			// stop if there are issues with the response
			if (response.status !== 200) {
				throw Error(response.status)
			}
			const parsedResponse = await response.json();

			this.setState({
				jobs: parsedResponse.data
			})

		} catch (err) {
			
			console.log(err);
		}
	}

	render(){
		console.log(this.state);

		return (

			<div>
				<h1>Remote & Contract Jobs</h1>
				<p>
				Who said being a freelancer means you're only ever self employed? One <strong>advantage</strong> of your software or design skills is that you can work from just about anywhere. 
				</p>
				<JobsList allJobs={this.state.jobs}/>
				
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