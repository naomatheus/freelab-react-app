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
				<h1>The Financials</h1> 
				<h3>Get Thy House In Order</h3>
				<p>
					Now comes to hard part, choosing how to keep track of your expenses, revenue, and tax obligations from your freelance or contract work.
				</p>
				<div className='card-display'>Set Your Prices </div>
				<div className='card-display'>Develop invoicing template </div>
				<div className='card-display'>Accounting Software </div>
				<div className='card-display'>CMS <a href='https://www.streak.com/'>(Streak)</a> </div>
				<div className='card-display'>Project Mgmt </div>
				
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