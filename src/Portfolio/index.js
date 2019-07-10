import React, { Component } from 'react';
import allPortfolioCheckBoxes from './allPortfolioCheckBoxes'
import Checkbox from '../CheckBoxComponent'

class Portfolio extends Component {
	constructor(props){
		super(props);

		this.state = {
			checkedItems: new Map(),
			userId: this.props.userId
		}
	};

	updateUser = async (e) => {
			console.log('sending checklist from the portfolio component');
			console.log(this.props.userId);

			e.preventDefault();

		try {

			/// converts the MAP object to JSON
			// any time a map has only strings as its keys it can be converted to an object

			//// EXAMPLE FUNCTION ////
			// function strMapToObj(strMap) {
			//     let obj = Object.create(null);
			//     for (let [k,v] of strMap) {
			//         // We don’t escape the key '__proto__'
			//         // which can cause problems on older engines
			//         obj[k] = v;
			//     }
			//     return obj;
			//// EXAMPLE FUNCTION ////

			
			const mapToObj = (strMap) => {
				let obj = Object.create(null);
				for (let [key,val] of strMap){
					obj[key] = val;
				}
				return obj;
			}
			// grabs the form submission from checklist form
			const checkBoxObj = mapToObj(this.state.checkedItems);
			// converted is passed in the fetch request body and stringified 

			const sentUser = await fetch('http://localhost:9000/user/' + this.state.userId, {
				method: 'PATCH',
				credentials: 'include',
				body: JSON.stringify({
					checkedItems: checkBoxObj
				}),
				headers: {
					'Content-Type':'application/json'
				}
			});


			console.log(sentUser);

			/// hits the put route of the express server to the DB that updates the user model
			const sentUserResponse = await sentUser.json();
			console.log(sentUserResponse);


		} catch (err){
			console.error(err)
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
				<h1>Build Your Portfolio</h1>
				<p>It is best never to launch the freelancing career if you do not have the right experience in creating or providing the services or products you mention. 
				</p>
				<p>
					Since it is the portfolio that would help you in marketing the services and products you offer, so you need to see that they have quality so you can show off.
				</p>
				<p>
					Producing examples for your portfolio is not complicated, though it does take time to create them.
				</p>
				<form onSubmit={this.updateUser}>
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