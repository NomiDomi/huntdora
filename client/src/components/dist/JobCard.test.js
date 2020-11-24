"use strict";
exports.__esModule = true;
var react_1 = require("react");
var JobCard_1 = require("./JobCard");
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
describe('<JobCard />', function () {
    test('it should render the component', function () {
        react_2.render(react_1["default"].createElement(JobCard_1.JobCard, null));
        var app = react_2.screen.getByTestId('JobCard');
        expect(app).toBeInTheDocument();
    });
});
