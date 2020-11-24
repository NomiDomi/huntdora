"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var enzyme_adapter_react_16_1 = require("enzyme-adapter-react-16");
var Welcome_1 = require("./Welcome");
var core_1 = require("@material-ui/core");
var test_utils_1 = require("@material-ui/core/test-utils");
var react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
enzyme_1["default"].configure({ adapter: new enzyme_adapter_react_16_1["default"]() });
describe('<Welcome />', function () {
    var shallow;
    beforeAll(function () {
        shallow = test_utils_1.createShallow();
    });
    it('should show text', function () {
        var wrapper = shallow(react_1["default"].createElement(Welcome_1.Welcome, null));
        var text = wrapper.find(core_1.Fade);
        expect(text.text()).toBe("Huntdora");
    });
    test('it should render the component', function () {
        react_2.render(react_1["default"].createElement(Welcome_1.Welcome, null));
        var app = react_2.screen.getByTestId('Welcome');
        expect(app).toBeInTheDocument();
    });
});
