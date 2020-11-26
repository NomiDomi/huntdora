import fn from './apiService';
import axios from 'axios';

const fakeDataJobId: any = {
  "employerId": 404159,
  "employerName": "Investigo",
  "jobId": 41416247,
  "jobTitle": "Management Accountant",
  "locationName": "Peterborough",
  "minimumSalary": 38000.0000,
  "maximumSalary": 42000.0000,
  "yearlyMinimumSalary": 38000.0000,
  "yearlyMaximumSalary": 42000.0000,
  "currency": "GBP",
  "salaryType": "per annum",
  "salary": "£38,000 - £42,000 per annum",
  "datePosted": "20/11/2020",
  "expirationDate": "01/01/2021",
  "externalUrl": null,
  "jobUrl": "https://www.reed.co.uk/jobs/management-accountant/41416247",
  "partTime": false,
  "fullTime": true,
  "contractType": "Permanent",
  "jobDescription": " <p>Investigo are pleased to be supporting a national organisation with multiple sites across the UK. This position sits within their distribution finance team and plays a pivotal role accounting for revenues, direct costs and overheads of multiple sites.</p> <p><strong>Key Duties</strong></p> <ul> <li>Reporting of weekly and month end financial results</li><li>Budget and outlook for overhead costs </li><li>Balance sheet reconciliations for all relevant accounts</li><li>Ad-hoc queries and support as required</li><li>Effective business partnering across the sites to connect with stakeholders</li><li>Provide support/cover to the wider team, including regular catch ups and team meetings.</li></ul> <p><br />Ideally, they are looking for a finalist or newly qualified accountant who's dynamic and really wants to make a difference. A large aspect of this role will be constantly looking at ways to improve and streamline processes - as such, having an investigative  approach to your work would stand you in a good stead.</p> ",
  "applicationCount": 0
}


const fakeData: any = {
  "results": [
    {
      "jobId": 1,
      "employerId": 123,
      "employerName": "Jack",
      "employerProfileId": null,
      "employerProfileName": null,
      "jobTitle": "Codeworksdev",
      "locationName": "London",
      "minimumSalary": 38000.00,
      "maximumSalary": 42000.00,
      "currency": "GBP",
      "expirationDate": "01/01/2021",
      "date": "20/11/2020",
      "jobDescription": " Jack are pleased to be..",
      "applications": 0,
      "jobUrl": "https://fakeurl.com"
    },
    {
      "jobId": 2,
      "employerId": 1234,
      "employerName": "Noemi",
      "employerProfileId": null,
      "employerProfileName": null,
      "jobTitle": "Codeworksdev",
      "locationName": "London",
      "minimumSalary": 38000.00,
      "maximumSalary": 42000.00,
      "currency": "GBP",
      "expirationDate": "01/01/2021",
      "date": "20/11/2020",
      "jobDescription": " Noemi are pleased to be..",
      "applications": 0,
      "jobUrl": "https://fakeurl.com"
    }
  ]
};

jest.mock('axios');

describe('API Services', () => {
  describe('Query jobs based on specific keywords', () => {
    test('it fetches the jobs', async () => {
      (axios.get as jest.Mock).mockImplementationOnce(() =>
        Promise.resolve({ data: fakeData })
      );
      const result = await fn.getSearchedJobs('query-test')
      expect(axios.get).toHaveBeenCalled()
      expect(result).toEqual(fakeData);
    });
  });

  describe('Query based on a job ID', () => {
    test('it fetches results from reed API based on a specific job ID', async () => {
      (axios.get as jest.Mock).mockImplementationOnce(() =>
        Promise.resolve({ data: fakeDataJobId })
      );
      const result = await fn.getJob('jobId-test')
      expect(axios.get).toHaveBeenCalled()
      expect(result).toEqual(fakeDataJobId);
    });
  }); 
})