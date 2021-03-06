import React from 'react';
import JobsContainer from '../JobsContainer'
import {JobCard,JobListItem} from './JobStyles'


const JobsList = (props) => {
	
	console.log(props.allJobs);
	for (let i in props.allJobs){
		const jobUrl = props.allJobs[i].url
		console.log(jobUrl);

	}
	
	
	const gitHubJobs = props.allJobs.map((job) => {
		
		return(

			<JobCard>
				<li key={job.id}>
					<span>
						Company:<strong> {job.company} </strong>
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
						<strong>Title: {job.title}</strong>
						<br/>
					</span>
					<span>
						Details:{job.url}
						<br/>
					</span>
				</li>
			</JobCard>
		)

	})

	return (

		<div>
			<h3>Github Jobs! You're ready to start applying!
				</h3>
			<JobListItem>
				{gitHubJobs}
			</JobListItem>
		</div>
		)
	
}
		


export default JobsList