"use strict";
exports.__esModule = true;
exports.NavBottom = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var IconButton_1 = require("@material-ui/core/IconButton");
var Star_1 = require("@material-ui/icons/Star");
var Pageview_1 = require("@material-ui/icons/Pageview");
var Grid_1 = require("@material-ui/core/Grid");
exports.NavBottom = function () {
    var history = react_router_dom_1.useHistory();
    var handleSavedPosts = function () {
        history.push('/saved-jobs');
    };
    var handleBackToSearch = function () {
        history.push('/job-search');
    };
    return (react_1["default"].createElement(Grid_1["default"], { container: true, "data-testid": "NavBottom", justify: "space-evenly", spacing: 1 },
        react_1["default"].createElement(IconButton_1["default"], { style: { color: '#F69483' }, "aria-label": "Back to Search", component: "button", onClick: handleBackToSearch },
            react_1["default"].createElement(Pageview_1["default"], { fontSize: 'large' })),
        react_1["default"].createElement(IconButton_1["default"], { style: { color: '#F5CE89' }, "aria-label": "Saved Posts", component: "button", onClick: handleSavedPosts },
            react_1["default"].createElement(Star_1["default"], { fontSize: 'large' }))));
};
