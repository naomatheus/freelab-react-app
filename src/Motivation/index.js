import React, { Component } from 'react';


class Motivation extends Component {
	constructor(){
		super();
		this.state = {
			// not sure that this component needs state except to return to one of the previous steps
		}
	}

	moveToPrev = () => {
		this.props.moveToFinancials();
	};


	render(){
		return(

			<div>
				<h1>Motivation</h1>

				<div className='resouce-card-display'>Draft NL Newsletter</div>
				<div className='resouce-card-display'>Freelance.io </div>
				<div className='resouce-card-display'>Medium publications  </div>
				<br/>
				
				
				<button
					id='previous'
					onClick={this.moveToPrev}>
					Previous
				</button>

				<button id='next'>
					Next - Does nothing right now
				</button>

				<form id='freelab-mailing-list'>
					<input 
						type='email' 
						placeholder='Join Our Mailing List'
					/>
				</form>
			</div>
		)
	}
}


export default Motivation;