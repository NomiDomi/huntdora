"use strict";
exports.__esModule = true;
exports.JobCard = void 0;
var react_1 = require("react");
var app_types_1 = require("../app-types");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("react");
var core_1 = require("@material-ui/core");
var LocalActivity_1 = require("@material-ui/icons/LocalActivity");
var LocalActivityOutlined_1 = require("@material-ui/icons/LocalActivityOutlined");
var styles_1 = require("@material-ui/core/styles");
/**
 * Hover over card animation
 */
var useStyles = styles_1.makeStyles({
    root: {
        transition: "transform 0.25s ease-in-out"
    },
    cardHovered: {
        transform: "scale(1.025)"
    }
});
exports.JobCard = function (_a) {
    var job = _a.job, getJob = _a.getJob, saveJob = _a.saveJob, removeJob = _a.removeJob;
    var _b = react_2.useState(job.saved), saved = _b[0], setsaved = _b[1];
    var _c = react_2.useState({ raised: false, shadow: 10 }), raised = _c[0], setraised = _c[1];
    var history = react_router_dom_1.useHistory();
    var classes = useStyles();
    var handleOnJobClick = function (jobId) {
        getJob(jobId);
        history.push("/job-details"); // eslint-disable-line no-restricted-globals
    };
    var handleAddRemove = function () {
        console.log('Changing property', job.saved);
        setsaved(function (saved) { return !saved; });
        job.saved ? removeJob(job) : saveJob(job);
        job.saved = !job.saved;
        console.log('Changed property', job.saved);
    };
    return (react_1["default"].createElement(core_1.Card, { "data-testid": "JobCard", className: classes.root, classes: { root: raised.raised ? classes.cardHovered : "" }, onMouseOver: function () { return setraised({ raised: true, shadow: 20 }); }, onMouseOut: function () { return setraised({ raised: false, shadow: 10 }); }, raised: raised.raised, elevation: raised.shadow },
        react_1["default"].createElement(core_1.CardContent, null,
            react_1["default"].createElement(core_1.Grid, { container: true, direction: "column" },
                react_1["default"].createElement(core_1.Grid, { container: true, direction: "row", spacing: 1 },
                    react_1["default"].createElement(core_1.Grid, { item: true, xs: 10, onClick: function () { return handleOnJobClick(job.jobId); } },
                        react_1["default"].createElement(core_1.Typography, { "data-testid": "JobCard-jobtitle", variant: "h6" },
                            react_1["default"].createElement("div", null, job.jobTitle))),
                    react_1["default"].createElement(core_1.Grid, { item: true, xs: 2 },
                        react_1["default"].createElement(core_1.Checkbox, { icon: react_1["default"].createElement(LocalActivityOutlined_1["default"], null), checkedIcon: react_1["default"].createElement(LocalActivity_1["default"], null), checked: saved, onChange: handleAddRemove, inputProps: {
                                'aria-label': 'secondary checkbox'
                            } }))),
                react_1["default"].createElement(core_1.Grid, { container: true, direction: "row" },
                    react_1["default"].createElement(core_1.Grid, { item: true, xs: 6 },
                        react_1["default"].createElement(core_1.Typography, { "data-testid": "JobCard-locationname", variant: "overline" },
                            react_1["default"].createElement("div", null, job.locationName))),
                    react_1["default"].createElement(core_1.Grid, { item: true, xs: 6 },
                        react_1["default"].createElement(core_1.Typography, { variant: "overline" },
                            react_1["default"].createElement("div", null, '£' + app_types_1.Job.calculateSalaryFreq(job.minimumSalary, job.maximumSalary)))))))));
};
