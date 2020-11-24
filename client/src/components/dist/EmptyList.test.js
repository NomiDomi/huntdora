"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var enzyme_adapter_react_16_1 = require("enzyme-adapter-react-16");
var EmptyList_1 = require("./EmptyList");
var core_1 = require("@material-ui/core");
var test_utils_1 = require("@material-ui/core/test-utils");
enzyme_1["default"].configure({ adapter: new enzyme_adapter_react_16_1["default"]() });
describe('<EmptyList />', function () {
    var shallow;
    beforeAll(function () {
        shallow = test_utils_1.createShallow();
    });
    it('should show text', function () {
        var wrapper = shallow(react_1["default"].createElement(EmptyList_1.EmptyList, null));
        var text = wrapper.find(core_1.Typography);
        expect(text.text()).toBe("No Jobs Here!");
    });
});
