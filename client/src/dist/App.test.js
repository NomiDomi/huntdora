"use strict";
exports.__esModule = true;
var react_1 = require("react");
var App_1 = require("./App");
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
describe('<App />', function () {
    var appRender;
    beforeEach(function () {
        appRender = react_2.render(react_1["default"].createElement(App_1.App, null));
    });
    afterEach(function () {
        appRender.unmount();
    });
    test('it should render the App', function () {
        var app = react_2.screen.getByTestId('App');
        expect(app).toBeInTheDocument();
    });
    describe('NavBar', function () {
        test('it should render top nav bar', function () {
            var navBarTop = react_2.screen.getByTestId('NavTop');
            expect(navBarTop).toBeInTheDocument();
        });
        test('it should open search box when clicked on text input', function () {
            var navBarTop = react_2.screen.getByTestId('NavTop');
            var searchBox = react_2.screen.getByLabelText('SearchBox');
            expect(navBarTop).toBeInTheDocument();
            react_2.fireEvent.click(searchBox);
            expect(react_2.screen.getByText('Set Filters')).toBeInTheDocument();
        });
    });
    describe('NavbarBottom', function () {
        test('it should render bottom nav bar', function () {
            var navBarBot = react_2.screen.getByTestId('NavBottom');
            expect(navBarBot).toBeInTheDocument();
        });
        test('if there are no jobs saved, it should show empty page with "no jobs here!"', function () {
            var navBarBot = react_2.screen.getByTestId('NavBottom');
            var searchButton = react_2.screen.getByLabelText('Back to Search');
            expect(navBarBot).toBeInTheDocument();
            react_2.fireEvent.click(searchButton);
            expect(react_2.screen.getByText('No Jobs Here!')).toBeInTheDocument();
        });
    });
});
