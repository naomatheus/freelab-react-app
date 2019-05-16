import React, { Component } from 'react';
import allPortfolioCheckBoxes from './allPortfolioCheckBoxes'
import Checkbox from '../CheckBoxComponent'

class Portfolio extends Component {
	constructor(){
		super();

		this.state = {
			checkedItems: new Map()
		}
	};

	moveToPrev = () => {
		this.props.moveToBizStructure();
	}; 

	moveToNext = () => {
		this.props.moveToJobsContainer();
	};

	handleInputChange = (e) => {
		
		const item = e.target.name;
		const isChecked = e.target.checked;
		// this set state method takes a prevState parameter, and sets the state to create another method called checkedItems.
		// the checkItems method contains the properties of item and isChecked.
		this.setState(prevState => ({checkedItems: prevState.checkedItems.set(item,isChecked)}))
		
	}

	render(){
		return(

			<React.Fragment>
				<h1>this is the portfolio component</h1>
				<form>
				{
					allPortfolioCheckBoxes.map(item => (
							<label key={item.label}>
								{item.name}
								<Checkbox 
									name={item.name}
									checked={this.state.checkedItems.get(item.name)}
									onChange={this.handleInputChange}
								/>

							</label>
						))
				}
					<button type='submit'>Save Progress</button>
				</form>
				
				
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
				
			</React.Fragment>
		)
	}
}



export default Portfolio;