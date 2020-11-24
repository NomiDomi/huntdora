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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.App = void 0;
var react_1 = require("react");
require("./App.css");
var apiService_1 = require("./apiService");
var app_types_1 = require("./app-types");
var Nav_1 = require("./components/Nav");
var NavBottom_1 = require("./components/NavBottom");
var JobPosts_1 = require("./components/JobPosts");
var JobDetails_1 = require("./components/JobDetails");
var Loading_1 = require("./components/Loading");
var Welcome_1 = require("./components/Welcome");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("@material-ui/core/");
var styles_1 = require("@material-ui/core/styles");
var apiService_2 = require("./services/apiService");
/*Example of custom styles that can be applied to a component (a custom button for example)
Follow docs for specific properties to use
 const useStyles = makeStyles({
   root: {
     background: 'linear-gradient(45deg, #333,#999)',
     border: 0,
     borderRadius: 15,
     color: 'white',
     padding: '0 30px'
   }
 })*/
//global themes can be set here
var theme = styles_1.createMuiTheme({
    /*text styling */
    typography: {
        allVariants: {
            color: '#1F2F47'
        }
    },
    /*General Primary and Secondary colours */
    palette: {
        primary: {
            light: '#f5f3ed',
            main: '#f3f0e9',
            dark: '#aaa8a3',
            contrastText: '#9fdcda'
        },
        secondary: {
            light: '#9fdcda',
            main: '#87d4d1',
            dark: '#5e9492',
            contrastText: '#1f2f47'
        }
    },
    /*Style of text boxes */
    overrides: {
        MuiFilledInput: {
            input: {
                padding: '5px'
            }
        },
        MuiInputBase: {
            input: {
                padding: '5px'
            }
        }
    }
});
theme = styles_1.responsiveFontSizes(theme);
var LOCAL_STORAGE_KEY = 'huntdora.savedJobs';
function App() {
    var _a = react_1.useState(''), searchQuery = _a[0], setSearchQuery = _a[1];
    var _b = react_1.useState([]), jobsList = _b[0], setJobsList = _b[1];
    var _c = react_1.useState(app_types_1.Job.parse({})), jobDetails = _c[0], setjobDetails = _c[1];
    var _d = react_1.useState([]), savedJobs = _d[0], setSavedJobs = _d[1];
    var _e = react_1.useState(false), loading = _e[0], setloading = _e[1];
    react_1.useEffect(function () {
        if (searchQuery !== '') {
            // Fetching the API result based on a specific search query
            var data = apiService_2["default"].getSearchedJobs(searchQuery);
            data.then(function (data) {
                // Mapping the jobs based on the Job class
                var jobs = data.results.map(function (job) { return app_types_1.Job.parse(job); });
                // Marking the job as saved 
                jobs.forEach(function (job) {
                    if (jobExists(job.jobId, savedJobs))
                        job.saved = !job.saved;
                });
                setJobsList(jobs);
                setloading(false);
            });
        }
    }, [searchQuery]);
    /**
     *Load jobs on startup
     */
    react_1.useEffect(function () {
        var sJobsJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (sJobsJSON != null)
            setSavedJobs(JSON.parse(sJobsJSON));
    }, []);
    /**
     *update jobs on save
     */
    react_1.useEffect(function () {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedJobs));
    }, [savedJobs]);
    /**
   *
   * functions to query api
   */
    function addQuery(data) {
        var query = data.query, locationName = data.locationName, distanceFrom = data.distanceFrom, minimumSalary = data.minimumSalary;
        var locationQuery = locationName ? "&locationName=" + locationName : "&locationName=london";
        var distanceQuery = distanceFrom ? "&distanceFromLocation=" + distanceFrom : "&distanceFromLocation=10";
        var salaryQuery = minimumSalary ? "&minimumSalary=" + minimumSalary : '';
        setloading(true);
        setSearchQuery(query + locationQuery + distanceQuery + salaryQuery);
    }
    function getJob(jobId) {
        return __awaiter(this, void 0, void 0, function () {
            var jobCached, newJob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Checking if is saved...');
                        jobCached = jobExists(jobId, savedJobs);
                        if (!jobCached) return [3 /*break*/, 1];
                        setjobDetails(jobCached);
                        console.log('Fetched Existing', jobCached);
                        return [3 /*break*/, 3];
                    case 1:
                        setloading(true);
                        console.log('Fetching new job details');
                        return [4 /*yield*/, apiService_1.getData(jobId, null)];
                    case 2:
                        newJob = _a.sent();
                        setjobDetails(newJob);
                        setloading(false);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    /*job saved from memory rather than refetched*/
    function saveJob(job) {
        return __awaiter(this, void 0, void 0, function () {
            var newJob_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!jobExists(job.jobId, savedJobs)) return [3 /*break*/, 2];
                        return [4 /*yield*/, apiService_1.getData(job.jobId, null)];
                    case 1:
                        newJob_1 = _a.sent();
                        newJob_1.saved = true;
                        setSavedJobs(function (savedJobs) { return __spreadArrays(savedJobs, [newJob_1]); });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    /*************************************
     *
     * Function Utilities for handling
     * saved job data and state
     *************************************/
    function saveJobFromDetails(job) {
        if (!jobExists(job.jobId, savedJobs))
            setSavedJobs(function (savedJobs) { return __spreadArrays(savedJobs, [job]); });
        updateJobInList(job.jobId);
    }
    function removeJob(job) {
        setSavedJobs(function (savedJobs) { return savedJobs.filter(function (sJob) { return sJob.jobId !== job.jobId; }); });
        updateJobInList(job.jobId);
    }
    function jobExists(jobId, list) {
        return list.find(function (listJob) { return listJob.jobId === jobId; });
    }
    function updateJobInList(jobId) {
        var jobToUpdate = jobExists(jobId, jobsList);
        if (jobToUpdate)
            jobToUpdate.saved = !jobToUpdate.saved;
        setJobsList(__spreadArrays(jobsList));
    }
    return (react_1["default"].createElement(styles_1.ThemeProvider, { theme: theme },
        react_1["default"].createElement(core_1.CssBaseline, null),
        " ",
        react_1["default"].createElement(core_1.Container, { "data-testid": "App", maxWidth: "sm", className: "App" },
            react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
                react_1["default"].createElement(core_1.AppBar, { color: "primary" },
                    react_1["default"].createElement(core_1.Toolbar, null,
                        react_1["default"].createElement(Nav_1.Nav, { addQuery: addQuery }))),
                react_1["default"].createElement(react_router_dom_1.Switch, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/', exact: true, render: function () { return (react_1["default"].createElement(Welcome_1.Welcome, null)); } }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/job-search', exact: true, render: function () { return loading ? (react_1["default"].createElement(Loading_1.Loading, null)) : (react_1["default"].createElement(JobPosts_1.JobPosts, { jobs: jobsList, getJob: getJob, saveJob: saveJob, removeJob: removeJob })); } }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/job-details', exact: true, render: function () { return loading ? (react_1["default"].createElement(Loading_1.Loading, null)) : (react_1["default"].createElement(JobDetails_1.JobDetails, { job: jobDetails, saveJobFromDetails: saveJobFromDetails, removeJob: removeJob })); } }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/saved-jobs', exact: true, render: function () { return (react_1["default"].createElement(JobPosts_1.JobPosts, { jobs: savedJobs, getJob: getJob, saveJob: saveJob, removeJob: removeJob })); } })),
                react_1["default"].createElement(core_1.AppBar, { color: "primary", position: "fixed", style: { top: 'auto', bottom: 0 } },
                    react_1["default"].createElement(core_1.Toolbar, null,
                        react_1["default"].createElement(NavBottom_1.NavBottom, null)))))));
}
exports.App = App;
/*Note about typescript
Before passing props to components
Interface/class needs to be created (not sure about difference to typescript)
to indicate the component expects that. At the same time, when passing the prop,
also the prop needs to be marked of that type.
*/