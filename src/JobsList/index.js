import React from 'react';
import JobsContainer from '../JobsContainer'


const JobsList = (props) => {
	
	console.log(props.allJobs);

	const gitHubJobs = props.allJobs.map((job) => {
		
		return(
			<div>
				<li key={job.id}>
					<span>
						Company: {job.company} 
					</span>
						<br/>
					<span>
						Posted: {job.created_at} 
						<br/>
					</span>
					<span>
						Type: {job.type}
						<br/>
					</span>
					<span>
						Description: {job.description}
						<br/>
					</span>
				</li>
			</div>
		)

	})

	return (

		<div>
			<h3>This will hold the Github Jobs API call return List
				</h3>
			<ul>
				{gitHubJobs}
			</ul>
		</div>
		)
	
}
		


export default JobsList