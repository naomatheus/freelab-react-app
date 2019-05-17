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

			<div className='bizStructure'>
			
				<h1>Determine your business structure</h1>
				<p> You knew we would have to talk about this right?

				Deciding the structure of your business can be a tough decision, but just remember not to overcomplicate things.</p>
				<div className='card-display'><h4>LLC - Limited Liability Company</h4>
					<p>LLC stands for Limited Liability Company and it’s the easiest way to structure your business to protect your personal assets against litigation.
					<strong>
						<a href='https://medium.com/the-nonprofit-revolution/a-quick-and-dirty-introduction-into-four-types-of-freelance-business-entities-1841979edab5'>Pros</a>
					</strong> <br/>
					<strong>
						<a href='https://medium.com/the-nonprofit-revolution/a-quick-and-dirty-introduction-into-four-types-of-freelance-business-entities-1841979edab5'>Cons</a>
					</strong>
					</p>
				</div>

				<div className='card-display'>
				<h4>DBA - Doing Business As </h4>
					<p>
					DBA stands for Doing Business As, and it isn’t so much a passthrough as it is a way to give your business a name other than your own.
						<strong><a href='https://medium.com/the-nonprofit-revolution/a-quick-and-dirty-introduction-into-four-types-of-freelance-business-entities-1841979edab5'>Pros</a></strong><br/>
						<strong><a href='https://medium.com/the-nonprofit-revolution/a-quick-and-dirty-introduction-into-four-types-of-freelance-business-entities-1841979edab5'>Cons</a></strong>
					</p>
				</div>

				<div className='card-display'>
				<h4>Sole Proprietorship</h4>
					<p>
					This is by far the most common type of business entity in the US due in part to how easy it is to set up, as well as how low the tax rate is when compared to other pass through entities.
						<strong><a href='https://medium.com/the-nonprofit-revolution/a-quick-and-dirty-introduction-into-four-types-of-freelance-business-entities-1841979edab5'>Pros</a></strong><br/>
						<strong><a href='https://medium.com/the-nonprofit-revolution/a-quick-and-dirty-introduction-into-four-types-of-freelance-business-entities-1841979edab5'>Cons</a></strong>
					</p>

				</div>
				<div className='card-display'>
				<h4>S Corporation</h4>
				<p>
				An S Corp is not a business entity as much as it is a designation for how you choose to have your business taxed under the IRS code. This designation is best for folks whose business collects profit beyond what they pay themselves as a reasonable salary.
					<strong><a href='https://medium.com/the-nonprofit-revolution/a-quick-and-dirty-introduction-into-four-types-of-freelance-business-entities-1841979edab5'>Pros</a></strong><br/>
					<strong><a href='https://medium.com/the-nonprofit-revolution/a-quick-and-dirty-introduction-into-four-types-of-freelance-business-entities-1841979edab5'>Cons</a></strong>
				</p>


				</div>

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