import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import { JobPosts } from "./JobPosts";


const mockEmptyJobs: any = [];
const mockJobArray: any = [
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

const mockFn = jest.fn();

describe('JobPosts', () => {
  let container: any = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test("renders without jobs", () => {
    act(() => {
      render(<JobPosts
        jobs={mockEmptyJobs}
        getJob={mockFn}
        saveJob={mockFn}
        removeJob={mockFn} />,
        container);
    });

    const app = screen.getByTestId('JobPosts');
    expect(app).toBeInTheDocument();

    expect(container.textContent).toBe("No Jobs Here!");
  })

  test("renders with jobs", () => {
    act(() => {
      render(<JobPosts
        jobs={mockJobArray}
        getJob={mockFn}
        saveJob={mockFn}
        removeJob={mockFn} />,
        container);
    });
    const app: any = screen.getByTestId('JobPosts');
    expect(app).toBeInTheDocument();
    const jobCards = screen.getAllByTestId('JobCard');
    expect(jobCards.length).toBe(2);
  })

})