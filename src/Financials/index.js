import React, { Component } from 'react';
import FinCard from './FinStyles'


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
				<FinCard>Set Your Prices </FinCard>
				<FinCard>Develop invoicing template </FinCard>
				<FinCard>Accounting Software </FinCard>
				<FinCard>CMS <a href='https://www.streak.com/'>(Streak)</a> </FinCard>
				<FinCard>Project Mgmt </FinCard>
				
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