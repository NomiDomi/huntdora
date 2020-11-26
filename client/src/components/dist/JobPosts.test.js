"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var test_utils_1 = require("react-dom/test-utils");
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var JobPosts_1 = require("./JobPosts");
var mockEmptyJobs = [];
var mockJobArray = [
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
];
var mockFn = jest.fn();
describe('JobPosts', function () {
    var container = null;
    beforeEach(function () {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });
    afterEach(function () {
        // cleanup on exiting
        react_dom_1.unmountComponentAtNode(container);
        container.remove();
        container = null;
    });
    test("renders without jobs", function () {
        test_utils_1.act(function () {
            react_dom_1.render(react_1["default"].createElement(JobPosts_1.JobPosts, { jobs: mockEmptyJobs, getJob: mockFn, saveJob: mockFn, removeJob: mockFn }), container);
        });
        var app = react_2.screen.getByTestId('JobPosts');
        expect(app).toBeInTheDocument();
        expect(container.textContent).toBe("No Jobs Here!");
    });
    test("renders with jobs", function () {
        test_utils_1.act(function () {
            react_dom_1.render(react_1["default"].createElement(JobPosts_1.JobPosts, { jobs: mockJobArray, getJob: mockFn, saveJob: mockFn, removeJob: mockFn }), container);
        });
        var app = react_2.screen.getByTestId('JobPosts');
        expect(app).toBeInTheDocument();
        var jobCards = react_2.screen.getAllByTestId('JobCard');
        expect(jobCards.length).toBe(2);
    });
});
