import React, { Component } from 'react';


class Niche extends Component {
	constructor(){
		super();

		this.state = {
			// props from App
			// App will reach down and grab this state,
			// this component may have methods that get passed down from App
		}
	}

	render(){
		return (

			<div>
			
				<h1>This is Niche Component</h1>
				<h2>Define Your Niche</h2>
				
				<div className='header-guide'>
					Best way to find your vision for the company is to ask yourself why you are starting this business in the first place. Who, how, what, and how will you market yourself.
				</div>

				<ul className='guide-list'>
					<li>Designer/Illustrator
					</li>
					<li>UX</li>
					<li>Logo/Branding</li>
					<li>Healthcare</li>
					<li>Retail</li>
					<li>Restaurants</li>
					<li>Package Design</li>
				</ul>
				<ul className='guide-list'>
					<li>Frontend</li>
					<li>Backend</li>
					<li>Web</li>
					<li>UI</li>
					<li>Data</li>
				</ul>
				

			</div>
		)
	}
}



export default Niche;