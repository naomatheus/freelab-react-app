import React, { Component } from 'react';


class Portfolio extends Component {
	constructor(){
		super();

		this.state = {
			isChecked: false
		}
	};

	moveToPrev = () => {
		this.props.moveToBizStructure();
	}; 

	moveToNext = () => {
		this.props.moveToJobsContainer();
	};

	handleInputChange = (e) => {
		console.log('clicking checkbox');
		const target = this.state.isChecked
		// if target.checked is true, check the box. if it is false, uncheck the box
		if (target === false) {

			/// make it only change the checked value of the name of the input element
			this.setState({
				isChecked : true
			})	
		} else if (
			target === true){
			 this.setState({
				isChecked : false
			})
		}

		
		
	}

	render(){
		return(

			<div id='portfolio-main'>
				<h1>this is the portfolio component</h1>
				<br/>
				<label>
				LinkedIn
				<input 
					type='checkbox'
					name='Web'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Brand & Brand Statements
				<input 
					type='checkbox'
					name='Web'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Projects
				<input 
					type='checkbox'
					name='Web'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Card & Referrals
				<input 
					type='checkbox'
					name='Web'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Network
				<input 
					type='checkbox'
					name='Web'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				
				
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