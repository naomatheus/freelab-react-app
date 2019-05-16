import React, { Component } from 'react';


class Portfolio extends Component {
	constructor(){
		super();

		this.state = {

		};
	};

	moveToPrev = () => {
		this.props.moveToBizStructure();
	}; 

	moveToNext = () => {
		this.props.moveToJobsContainer();
	}


	render(){
		return(

			<div id='portfolio-main'>
				<h1>this is the portfolio component</h1>
				
				<ul className='guide-list'>
					<li>LinkedIn</li>
					<li>Brand & Brand Statements</li>
					<li>Projects</li>
					<li>Cards & Referrals</li>
					<li>Network</li>
				</ul>
				
				<button
					onClick={this.moveToPrev}
					id='previous'>
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



export default Portfolio;