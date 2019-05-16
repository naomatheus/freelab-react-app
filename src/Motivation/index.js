import React, { Component } from 'react';


class Motivation extends Component {
	constructor(){
		super();
		this.state = {
			// not sure that this component needs state except to return to one of the previous steps
		}
	}

	render(){
		return(

			<div>
				<h1>This is the motivation component</h1>
				<div className='resouce-card-display'>Draft NL Newsletter resource-card-display</div>
				<div className='resouce-card-display'>Freelance.io resource-card-display</div>
				<div className='resouce-card-display'>Medium publications  resource-card-display</div>
				<div className='resouce-card-display'>Another website external link resource resource-card-display</div>
				<br/>
				<form id='freelab-mailing-list'>
					<input 
						type='email' 
						placeholder='Join Our Mailing List'
					/>
				</form>
				<button
					id='next'
					onClick={this.moveToNext}>
					Next
				</button>
				<button
					onClick={this.moveToPrevious}
					id='previous'>
					Previous
				</button>
			</div>
		)
	}
}


export default Motivation;