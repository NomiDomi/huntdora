"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NavBottom_1 = require("./NavBottom");
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
describe('<NavBottom />', function () {
    test('it should render the component', function () {
        react_2.render(react_1["default"].createElement(NavBottom_1.NavBottom, null));
        var app = react_2.screen.getByTestId('NavBottom');
        expect(app).toBeInTheDocument();
    });
});
