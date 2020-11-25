import React, { useEffect, useState } from 'react';
import './App.css';
import { getData } from './apiService';
import { Job } from './Job';
import { Nav } from './components/Nav';
import { NavBottom } from './components/NavBottom'
import { JobPosts } from './components/JobPosts';
import { JobDetails } from './components/JobDetails';
import { Loading } from './components/Loading';
import { Welcome } from './components/Welcome';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Container, CssBaseline, AppBar, Toolbar } from '@material-ui/core/';
import { ThemeProvider} from '@material-ui/core/styles';
import ApiClient from './services/apiService';
import theme from './theme';

const LOCAL_STORAGE_KEY = 'huntdora.savedJobs';

export function App() {

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [jobsList, setJobsList] = useState<Job[] | []>([]);
  const [jobDetails, setjobDetails] = useState<Job>(Job.parse({}));
  const [savedJobs, setSavedJobs] = useState<Job[] | []>([]);
  const [loading, setloading] = useState<boolean>(false)

  useEffect(() => {
    if (searchQuery !== '') {
      // Fetching the API result based on a specific search query
      const data: any = ApiClient.getSearchedJobs(searchQuery);
      data.then((data: any) => {
        // Mapping the jobs based on the Job class
        const jobs: any = data.results.map((job: any) => Job.parse(job));
        // Marking the job as saved 
        jobs.forEach((job: Job) => {
          if (jobExists(job.jobId, savedJobs)) job.saved = !job.saved;
        })
        setJobsList(jobs);
        setloading(false);
      })
    }
  }, [searchQuery]);

  /**
   *Load jobs on startup
   */
  useEffect(() => {
    const sJobsJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (sJobsJSON != null) setSavedJobs(JSON.parse(sJobsJSON));
  }, [])
  /**
   *update jobs on save
   */
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedJobs))
  }, [savedJobs])

  /**
 *
 * functions to query api
 */

  function addQuery(data: { query: string, locationName: string, distanceFrom: number | '', minimumSalary: number | '' }) {
    let { query, locationName, distanceFrom, minimumSalary } = data;
    const locationQuery = locationName ? `&locationName=${locationName}` : `&locationName=london`;
    const distanceQuery = distanceFrom ? `&distanceFromLocation=${distanceFrom}` : `&distanceFromLocation=10`;
    const salaryQuery = minimumSalary ? `&minimumSalary=${minimumSalary}` : '';
    setloading(true);
    setSearchQuery(query + locationQuery + distanceQuery + salaryQuery);
  }

  async function getJob(jobId: number) {
    console.log('Checking if is saved...')
    const jobCached = jobExists(jobId, savedJobs);
    if (jobCached) {
      setjobDetails(jobCached)
      console.log('Fetched Existing', jobCached)
    }
    else {
      setloading(true);
      console.log('Fetching new job details');
      const newJob: Job = await getData(jobId, null)
      setjobDetails(newJob)
      setloading(false);
    }
  }

  /*job saved from memory rather than refetched*/
  async function saveJob(job: Job) {
    if (!jobExists(job.jobId, savedJobs)) {
      const newJob: Job = await getData(job.jobId, null);
      newJob.saved = true;
      setSavedJobs(savedJobs => [...savedJobs, newJob]);
    }
  }

  /*************************************
   *
   * Function Utilities for handling
   * saved job data and state
   *************************************/

  function saveJobFromDetails(job: Job) {
    if (!jobExists(job.jobId, savedJobs)) setSavedJobs(savedJobs => [...savedJobs, job]);
    updateJobInList(job.jobId);
  }

  function removeJob(job: Job) {
    setSavedJobs(savedJobs => savedJobs.filter(sJob => sJob.jobId !== job.jobId));
    updateJobInList(job.jobId);
  }

  function jobExists(jobId: number, list: any[]): Job | undefined {
    return list.find(listJob => listJob.jobId === jobId);
  }

  function updateJobInList(jobId: number) {
    const jobToUpdate: Job | undefined = jobExists(jobId, jobsList);
    if (jobToUpdate) jobToUpdate.saved = !jobToUpdate.saved;
    setJobsList([...jobsList]);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/*MATERIAL UI CSS RESET*/}
      <Container data-testid="App" maxWidth="sm" className="App">
        <Router>
          <AppBar color="primary">
            <Toolbar >
              <Nav addQuery={addQuery} />
            </Toolbar>
          </AppBar>
          <Switch>
            <Route path='/' exact render={() => (<Welcome />)} />
            <Route path='/job-search' exact render={() => loading ? (<Loading />) : (<JobPosts jobs={jobsList} getJob={getJob} saveJob={saveJob} removeJob={removeJob} />)} />
            <Route path='/job-details' exact render={() => loading ? (<Loading />) : (<JobDetails job={jobDetails} saveJobFromDetails={saveJobFromDetails} removeJob={removeJob} />)} />
            <Route path='/saved-jobs' exact render={() => (<JobPosts jobs={savedJobs} getJob={getJob} saveJob={saveJob} removeJob={removeJob} />)} />
          </Switch>
          <AppBar color="primary" position="fixed" style={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
              <NavBottom />
            </Toolbar>
          </AppBar>
        </Router>
      </Container>
    </ThemeProvider>
  );
}





/*Note about typescript
Before passing props to components
Interface/class needs to be created (not sure about difference to typescript)
to indicate the component expects that. At the same time, when passing the prop,
also the prop needs to be marked of that type.
*/
