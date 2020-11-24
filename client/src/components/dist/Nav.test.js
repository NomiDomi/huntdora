"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Nav_1 = require("./Nav");
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
describe('<Nav />', function () {
    test('it should render the component', function () {
        react_2.render(react_1["default"].createElement(Nav_1.Nav, null));
        var app = react_2.screen.getByTestId('Nav');
        expect(app).toBeInTheDocument();
    });
});
