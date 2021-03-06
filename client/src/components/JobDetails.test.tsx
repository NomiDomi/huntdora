import React from 'react';
import { JobDetails } from './JobDetails';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const mockFn = jest.fn();
const mockJob = {
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
  "jobUrl": "https://fakeurl.com",
  "externalUrl": "",
  "saved": true
}

describe('<JobDetails />', () => {
  let appRender: any;

  beforeEach(() => {
    appRender = render(<JobDetails  
      job={mockJob}
      saveJobFromDetails={mockFn}
      removeJob={mockFn}
      />);    
  });

  afterEach(() => {
    appRender.unmount();
  });

  test('it should render the component', () => {
    const app = screen.getByTestId('JobDetails');
    expect(app).toBeInTheDocument();
  })
});
