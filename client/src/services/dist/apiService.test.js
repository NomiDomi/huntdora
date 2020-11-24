"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var apiService_1 = require("./apiService");
var axios_1 = require("axios");
var fakeDataJobId = {
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
};
var fakeData = {
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
describe('API Services', function () {
    test('fetches results from reed API based on a specific query', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    axios_1["default"].get.mockImplementationOnce(function () {
                        return Promise.resolve({ data: fakeData });
                    });
                    return [4 /*yield*/, apiService_1["default"].getSearchedJobs('query-test')];
                case 1:
                    result = _a.sent();
                    expect(axios_1["default"].get).toHaveBeenCalled();
                    expect(result).toEqual(fakeData);
                    return [2 /*return*/];
            }
        });
    }); });
    test('fetches results from reed API based on a specific job ID', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    axios_1["default"].get.mockImplementationOnce(function () {
                        return Promise.resolve({ data: fakeDataJobId });
                    });
                    return [4 /*yield*/, apiService_1["default"].getJob('jobId-test')];
                case 1:
                    result = _a.sent();
                    expect(axios_1["default"].get).toHaveBeenCalled();
                    expect(result).toEqual(fakeDataJobId);
                    return [2 /*return*/];
            }
        });
    }); });
    // circumstance -> consequence
    // API CALL 1
    // when query is empty the API returns all jobs
    // when query is a valid string the API should fetch the results
    // 
    // API CALL 2
    // 
});
