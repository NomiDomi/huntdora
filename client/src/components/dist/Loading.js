"use strict";
exports.__esModule = true;
exports.Loading = void 0;
var react_1 = require("react");
var loading_spinner_json_1 = require("../assets/loading-spinner.json");
var lottie_web_1 = require("lottie-web");
var Grid_1 = require("@material-ui/core/Grid");
var core_1 = require("@material-ui/core");
exports.Loading = function () {
    react_1.useEffect(function () {
        var loading = lottie_web_1["default"].loadAnimation({
            container: document.querySelector("#loading-spinner"),
            animationData: loading_spinner_json_1["default"],
            renderer: "svg",
            loop: true,
            autoplay: true
        });
        return function () {
            loading.destroy();
        };
    }, []);
    return (react_1["default"].createElement(Grid_1["default"], { container: true, "data-testid": "Loading", justify: "center", alignItems: 'center', style: { height: '70vh' } },
        react_1["default"].createElement(Grid_1["default"], { item: true },
            react_1["default"].createElement("div", { id: "loading-spinner", style: { width: '100%', height: 'auto', maxWidth: 600 } }),
            react_1["default"].createElement(core_1.Typography, { align: "center", variant: "h6" },
                react_1["default"].createElement("div", null, "Getting Jobs...")))));
};
