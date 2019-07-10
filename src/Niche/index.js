import React, { Component } from 'react';
import allNicheCheckBoxes from './allNicheCheckBoxes'
import Checkbox from '../CheckBoxComponent';


class Niche extends Component {
	constructor(props){
		super(props);

		this.state = {
			// props from App
			// App will reach down and grab this state,
			// this component may have methods that get passed down from App
			checkedItems: new Map(),
			userId: this.props.userId
		}
	}

	/// component did mount every time this loads up to see if there are any boxes that should be checked.
	
	updateUser = async (e) => {
		console.log('sending checklist info to User model');
		console.log(this.state.userId);

		e.preventDefault();

		try {
			/// converts the MAP object to JSON
			// any time a map has only strings as its keys it can be converted to an object

			// function strMapToObj(strMap) {
			//     let obj = Object.create(null);
			//     for (let [k,v] of strMap) {
			//         // We don’t escape the key '__proto__'
			//         // which can cause problems on older engines
			//         obj[k] = v;
			//     }
			//     return obj;

			    const mapToObj = (strMap) => {
			    	let obj = Object.create(null);
			    	for (let [key, val] of strMap){
			    		obj[key] = val;
			    	}
			    	return obj;
			    }
			    console.log(mapToObj(this.state.checkedItems));
			    const checkBoxObj = mapToObj(this.state.checkedItems);

			// makes a fetch request
			const sentUser = await fetch('http://localhost:9000/user/' + this.state.userId, {
				method: 'PATCH',
				credentials: 'include',
				body: JSON.stringify({
					checkedItems: checkBoxObj
				}),
				headers: {
					'Content-Type':'application/json',
				}
			});

			// grab the form submission 
			console.log(sentUser);

			/// hits the put route of the express server to the DB that updates the user model
			const sentUserResponse = await sentUser.json();
			console.log(sentUserResponse);

			/// this sentUserResponse contains the correct fetch response, but does not contain the information from the DB

			// does app component need to call the DB to update state? 
			
			// this.setState({
			// 	checkedItems: 
			// })

		} catch (err){

			console.error(err)
		}
	};


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
		console.log(e.target.checked, 'this is e.target.checked in the niche component after state is set');
		
	}

	render(){
		console.log(this.state.checkedItems);

		return (

			<React.Fragment>
			
				
				<h1>Define Your Niche</h1>
				<form onSubmit={this.updateUser}>
				{
					allNicheCheckBoxes.map( (item) => {
	
							let checkStatus = this.state.checkedItems.get(item.name);

							// if according to 
							// this.props.XXXX (where XXXX is whatever data was passed down) the user has already selected and saved this particular item, you reassign checkStatus to just be true

							return (
								<label key={item.label} >
								<br/>
									{item.name}
									<Checkbox 
										name={item.name}
										checked={checkStatus}
										onChange={this.handleInputChange}/>
								</label>
							)
						}
						
					)
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



export default Niche;