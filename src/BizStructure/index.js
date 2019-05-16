import React, { Component } from 'react';



class BizStructure extends Component {
	constructor(){
		super();

		this.state = {

		};
	}

	moveToPrev = () => {
		this.props.moveToNiche();
	};

	moveToNext = () => {
		this.props.moveToPortfolio();
	};

	render(){
		return(

			<div>
			
				<h1>this is the biz structure component</h1>
				<div className='card-display'>LLC card-display</div>
				<div className='card-display'>DBA card-display</div>
				<div className='card-display'>Sole Proprietor card-display</div>
				<div className='card-display'>S Corp card-display</div>

				<button
					id='previous'
					onClick={this.moveToPrev}
					>
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



export default BizStructure;