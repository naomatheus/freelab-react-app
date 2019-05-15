import React, { Component } from 'react';


class Portfolio extends Component {
	constructor(){
		super();

		this.state = {

		};
	}

	render(){
		return(

			<div id='portfolio-main'>
				this is the portfolio component
				//////////////
				<ul className='guide-list'>
					<li>LinkedIn</li>
					<li>Brand & Brand Statements</li>
					<li>Projects</li>
					<li>Cards & Referrals</li>
					<li>Network</li>
				</ul>
				//////////////
			</div>
		)
	}
}



export default Portfolio;