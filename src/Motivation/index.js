import React, { Component } from 'react';
import ResourceCard from './ResourceCard'


class Motivation extends Component {
	constructor(){
		super();
		this.state = {
			
		}
	}

	moveToPrev = () => {
		this.props.moveToFinancials();
	};


	render(){
		return(

			<div>
				<h1>Motivation</h1>

				<ResourceCard>
					<a href='https://draft.nu/'>
						Draft.nu Newsletter
					</a>
				</ResourceCard>

				<ResourceCard>
					<a href='https://www.gun.io/'> Freelance with Gun.io 
					</a>
				</ResourceCard>

				<ResourceCard>
					<a href='https://medium.com/topic/freelancing'>
						Medium - Freelancing 
					</a>
				</ResourceCard>
				
				<br/>
				
				<button
					id='previous'
					onClick={this.moveToPrev}>
					Previous
				</button>

				<form id='freelab-mailing-list'>
					<input 
						type='email' 
						placeholder='Join the Freelab Mailing List'
					/>
				</form>
			</div>
		)
	}
}


export default Motivation;