import React, { Component } from 'react';
import allNicheCheckBoxes from './allNicheCheckBoxes'

class Niche extends Component {
	constructor(){
		super();

		this.state = {
			// props from App
			// App will reach down and grab this state,
			// this component may have methods that get passed down from App
			checkedItems: new Map()
		}
	}

	moveToPrev = () => {
		this.props.moveToIntro();
	};

	moveToNext = () => {
		this.props.moveToBizStructure();
	};

	handleInputChange = (e) => {
		
		const item = e.target.name;
		const isChecked = e.target.checked;
		this.setState(prevState => ({checkedItems: prevState.checkedItems.set(item, isChecked)})
			
		)
		
	}

	render(){
		return (

			<React.Fragment>
			
				<h1>This is Niche Component</h1>
				<h2>Define Your Niche</h2>
				
				{
					allNicheCheckBoxes.map(item => (
							<label key={item.label} >
								{item.name}
								<Checkbox 
									name={item.name}
									checked={this.state.checkedItems.get(item.name)}
									onChange={this.handleInputChange}/>
							</label>
						) 
						
					)
				}
				
				
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



export default Niche;