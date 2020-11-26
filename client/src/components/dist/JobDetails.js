"use strict";
exports.__esModule = true;
exports.JobDetails = void 0;
var react_1 = require("react");
var react_2 = require("react");
var html_react_parser_1 = require("html-react-parser");
var LocalActivity_1 = require("@material-ui/icons/LocalActivity");
var LocalActivityOutlined_1 = require("@material-ui/icons/LocalActivityOutlined");
var core_1 = require("@material-ui/core");
exports.JobDetails = function (_a) {
    var job = _a.job, saveJobFromDetails = _a.saveJobFromDetails, removeJob = _a.removeJob;
    var _b = react_2.useState(job.saved), saved = _b[0], setsaved = _b[1];
    var handleAddRemove = function () {
        job.saved ? removeJob(job) : saveJobFromDetails(job);
        job.saved = !job.saved;
        setsaved(function (saved) { return !saved; });
    };
    // Long job description returns a string of HTML
    function parseJobDesc() {
        if (job.jobDescription)
            return html_react_parser_1["default"](job.jobDescription);
    }
    function handleApply(url) {
        try {
            if (url === null)
                throw new Error('invalid url');
            window.open(url);
        }
        catch (e) {
            console.error(e);
        }
    }
    return (react_1["default"].createElement(core_1.Grid, { container: true, "data-testid": "JobDetails", direction: "column" },
        react_1["default"].createElement(core_1.Grid, { container: true, justify: 'space-between', style: { padding: '20px' } },
            react_1["default"].createElement(core_1.Grid, { item: true, xs: 8 },
                react_1["default"].createElement(core_1.Typography, { variant: 'h4', component: "div" }, job === null || job === void 0 ? void 0 : job.jobTitle)),
            react_1["default"].createElement(core_1.Grid, { item: true, xs: 2 },
                react_1["default"].createElement(core_1.Checkbox, { icon: react_1["default"].createElement(LocalActivityOutlined_1["default"], { fontSize: "large" }), checkedIcon: react_1["default"].createElement(LocalActivity_1["default"], { fontSize: "large" }), checked: saved, onChange: handleAddRemove, inputProps: {
                        'aria-label': 'secondary checkbox'
                    } })),
            react_1["default"].createElement(core_1.Grid, { item: true, xs: 2 },
                react_1["default"].createElement(core_1.Button, { color: "secondary", "aria-label": "search", component: "button", size: 'large', onClick: function () { return handleApply((job === null || job === void 0 ? void 0 : job.externalUrl) || (job === null || job === void 0 ? void 0 : job.jobUrl)); }, variant: "contained" }, "Apply"))),
        react_1["default"].createElement(core_1.Grid, { item: true },
            react_1["default"].createElement(core_1.Typography, { component: "div", style: { padding: '0 20px 0 20px' } }, parseJobDesc()))));
};
