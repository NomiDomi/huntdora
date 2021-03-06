"use strict";
exports.__esModule = true;
var react_1 = require("react");
var JobCard_1 = require("./JobCard");
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var mockFn = jest.fn();
var mockJob = {
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
};
describe('JobCard', function () {
    var appRender;
    beforeEach(function () {
        appRender = react_2.render(react_1["default"].createElement(JobCard_1.JobCard, { job: mockJob, getJob: mockFn, saveJob: mockFn, removeJob: mockFn }));
    });
    afterEach(function () {
        appRender.unmount();
    });
    test('it should render the component', function () {
        var app = react_2.screen.getByTestId('JobCard');
        expect(app).toBeInTheDocument();
    });
});
