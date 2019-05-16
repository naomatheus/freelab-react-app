import React, { Component } from 'react';
import allNicheCheckboxes from './allNicheCheckBoxes'

class Niche extends Component {
	constructor(){
		super();

		this.state = {
			// props from App
			// App will reach down and grab this state,
			// this component may have methods that get passed down from App
			isChecked: false
		}
	}

	moveToPrev = () => {
		this.props.moveToIntro();
	};

	moveToNext = () => {
		this.props.moveToBizStructure();
	};

	handleInputChange = (e) => {
		console.log('clicking checkbox');
		const target = this.state.isChecked
		// if target.checked is true, check the box. if it is false, uncheck the box
		if (target === false) {
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
		return (

			<div>
			
				<h1>This is Niche Component</h1>
				<h2>Define Your Niche</h2>
				
				<div className='header-guide'>
					Best way to find your vision for the company is to ask yourself why you are starting this business in the first place. Who, how, what, and how will you market yourself.
				</div>

				<label>
				Designer/Illustrator
				<input 
					type='checkbox'
					name='designer/illustrator'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				UX
				<input 
					type='checkbox'
					name='UX'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Logo/Branding
				<input 
					type='checkbox'
					name='Logo/Branding'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Healthcare
				<input 
					type='checkbox'
					name='Healthcare'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Retail
				<input 
					type='checkbox'
					name='Retail'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Restaurants
				<input 
					type='checkbox'
					name='Restaurants'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Package Design
				<input 
					type='checkbox'
					name='Package Design'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Frontend
				<input 
					type='checkbox'
					name='Frontend'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Backend
				<input 
					type='checkbox'
					name='Backend'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Web
				<input 
					type='checkbox'
					name='Web'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				UI
				<input 
					type='checkbox'
					name='UI'
					checked={this.state.isChecked}
					onChange={this.handleInputChange}
					
				/>
				</label>
				<br/>
				<label>
				Data
				<input 
					type='checkbox'
					name='Data'
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



export default Niche;