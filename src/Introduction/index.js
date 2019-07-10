import React, { Component } from 'react';
import IntroBubble from './IntroStyles'

class Introduction extends Component {
	constructor(){
		super();

		this.state = {
/// not sure if this componenet needs state. It will mainly be a display component meant to move folks through each step
		};
	}

	moveToNext = () => {
		this.props.moveToNiche();
	}

	render(){
		return (
			<div id='intro-main'>
			
			
				<h1>Freelab</h1>
				<h2>6 Steps to Become a Freelance Web Developer or Designer</h2>

				<IntroBubble>Niche</IntroBubble>
				<IntroBubble>Business Structure</IntroBubble>
				<IntroBubble>Portfolio</IntroBubble>
				<IntroBubble>Jobs/Get out there</IntroBubble>
				<IntroBubble>Financials</IntroBubble>
				<IntroBubble>Resources & Motivation</IntroBubble>
				<button
					id='next'
					onClick={this.moveToNext}>
					Next
				</button>
				
			</div>
		)
	}
}



export default Introduction;