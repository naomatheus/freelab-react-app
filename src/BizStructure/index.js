import React, { Component } from 'react';



class BizStructure extends Component {
	constructor(){
		super();

		this.state = {

		};
	}

	render(){
		return(

			<div>
			/////////////////////
				this is the biz structure component
				<div className='card-display'>LLC card-display</div>
				<div className='card-display'>DBA card-display</div>
				<div className='card-display'>Sole Proprietor card-display</div>
				<div className='card-display'>S Corp card-display</div>



			////////////////////
			</div>
		)
	}
}



export default BizStructure;