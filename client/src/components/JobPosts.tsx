import React from 'react';
import { JobCard } from './JobCard';
import { Job } from '../Job';
import Grid from '@material-ui/core/Grid';
import { EmptyList } from './EmptyList';

interface Props {
  jobs: Job[];
  getJob: (jobId: number) => void;
  saveJob: (job: Job) => void;
  removeJob: (job: Job) => void;
}

export const JobPosts: React.FC<Props> = (props) => {
  return (
    <Grid container data-testid="JobPosts" spacing={3}>
      {
        props.jobs.length > 0 ? props.jobs?.map(job => (
        <Grid item style={{ width: '100%' }} key={job.jobId}>
            <JobCard job={job} getJob={props.getJob} saveJob={props.saveJob} removeJob={props.removeJob} />
        </Grid>
      )) : <EmptyList/>
    }
    </Grid>
  )
}