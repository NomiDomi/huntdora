"use strict";
exports.__esModule = true;
var react_1 = require("react");
var App_1 = require("./App");
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
describe('App', function () {
    test('it should render the App', function () {
        react_2.render(react_1["default"].createElement(App_1.App, null));
        var app = react_2.screen.getByTestId('App');
        expect(app).toBeInTheDocument();
    });
});
