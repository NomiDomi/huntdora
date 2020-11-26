"use strict";
exports.__esModule = true;
exports.JobPosts = void 0;
var react_1 = require("react");
var JobCard_1 = require("./JobCard");
var Grid_1 = require("@material-ui/core/Grid");
var EmptyList_1 = require("./EmptyList");
exports.JobPosts = function (props) {
    var _a;
    return (react_1["default"].createElement(Grid_1["default"], { container: true, "data-testid": "JobPosts", spacing: 3 }, props.jobs.length > 0 ? (_a = props.jobs) === null || _a === void 0 ? void 0 : _a.map(function (job) { return (react_1["default"].createElement(Grid_1["default"], { item: true, style: { width: '100%' }, key: job.jobId },
        react_1["default"].createElement(JobCard_1.JobCard, { job: job, getJob: props.getJob, saveJob: props.saveJob, removeJob: props.removeJob }))); }) : react_1["default"].createElement(EmptyList_1.EmptyList, null)));
};
