import React, { Component } from 'react';


class Introduction extends Component {
	constructor(){
		super();

		this.state = {
/// not sure if this componenet needs state. It will mainly be a display component meant to move folks through each step
		};
	}

	render(){
		return (
			<div id='intro-main'>
			////////////////////////////
			This is the Intro component
				<h1>Freelab</h1>
				<h2>6 Steps to Become a Freelance Web Developer or Designer</h2>

				<div className='intro-bubble'>Niche</div>
				<div className='intro-bubble'>Business Structure</div>
				<div className='intro-bubble'>Portfolio</div>
				<div className='intro-bubble'>Jobs/Get out there</div>
				<div className='intro-bubble'>Financials</div>
				<div className='intro-bubble'>Resources & Motivation</div>
				/////////////////////////
			</div>
		)
	}
}



export default Introduction;