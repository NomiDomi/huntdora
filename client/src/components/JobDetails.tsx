import React from 'react';
import { useState } from 'react';
import { Job } from '../Job';
import parse from 'html-react-parser';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import LocalActivityOutlinedIcon from '@material-ui/icons/LocalActivityOutlined';
import { Checkbox, Grid, Typography, Button } from '@material-ui/core';

interface Props {
  job: Job;
  saveJobFromDetails: (job: Job) => void;
  removeJob: (job: Job) => void;
}

export const JobDetails: React.FC<Props> = ({ job, saveJobFromDetails, removeJob }) => {

  const [saved, setsaved] = useState<boolean>(job.saved)

  const handleAddRemove = (): void => {
    job.saved ? removeJob(job) : saveJobFromDetails(job);
    job.saved = !job.saved;
    setsaved((saved: boolean) => !saved);
  }
  /**
   * Long job description returns
   * a string of HTML
   */
  function parseJobDesc(): JSX.Element | JSX.Element[] | undefined {
    if (job.jobDescription) return parse(job.jobDescription)
  }

  function handleApply(url: string | null): void {
    try {
      if (url === null) throw new Error('invalid url');
      window.open(url);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Grid container data-testid="JobDetails" direction={"column"}>
      <Grid container justify='space-between' style={{ padding: '20px' }}>
        <Grid item xs={8}>
          <Typography variant={'h4'} component="div">
            {job?.jobTitle}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Checkbox
            icon={<LocalActivityOutlinedIcon fontSize="large" />}
            checkedIcon={<LocalActivityIcon fontSize="large" />}
            checked={saved}
            onChange={handleAddRemove}
            inputProps={{
              'aria-label': 'secondary checkbox'
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            color="secondary"
            aria-label="search"
            component="button"
            size='large'
            onClick={() => handleApply(job?.externalUrl || job?.jobUrl)}
            variant="contained"
          >Apply
                  </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Typography component="div" style={{ padding: '0 20px 0 20px' }}>
          {parseJobDesc()}
        </Typography>
      </Grid>
    </Grid>
  )
}
