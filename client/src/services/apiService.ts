// Import the packages
import axios from 'axios';
// Declare the base URL for the API and the key
const BASE_URL: string = 'https://cors-anywhere.herokuapp.com/https://www.reed.co.uk/api/1.0';
const API_KEY: string = 'baf1fe9d-e239-4071-84f8-39bbee2b5c33';

export default {
  getJob: (jobId: string) => {
    return fetchRequest(`/jobs/${jobId}`)
      .then((response: any) => { return response.data })
  },
  getSearchedJobs: (query: string) => {
    return fetchRequest(`/search?keywords=${query}`)
      .then((response: any) => { return response.data })
  }
}

// Fetch the information from the API based on the base url and the path to certain data
const fetchRequest: any = async (path: string) => {
  try {
    const res: any = await axios(`${BASE_URL}${path}`,
      {
        auth: {
          username: API_KEY,
          password: ''
        },
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "message/http"
        }
      }
    )
    return res;
    }
  catch (err) {
    console.error(`The API call to ${BASE_URL}${path} has failed with the following error message: ${err}`);
  }
}