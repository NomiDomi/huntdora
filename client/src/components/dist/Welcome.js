"use strict";
exports.__esModule = true;
exports.Welcome = void 0;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var loading_spinner_json_1 = require("../assets/loading-spinner.json");
var lottie_web_1 = require("lottie-web");
exports.Welcome = function () {
    react_1.useEffect(function () {
        var welcome = lottie_web_1["default"].loadAnimation({
            container: document.querySelector("#load-welcome"),
            animationData: loading_spinner_json_1["default"],
            renderer: "svg",
            loop: true,
            autoplay: true
        });
        return function () {
            welcome.destroy();
        };
    }, []);
    return (react_1["default"].createElement(core_1.Grid, { container: true, "data-testid": "Welcome", justify: "center", alignItems: "center", direction: "column", style: { height: '70vh' } },
        react_1["default"].createElement(core_1.Grid, { item: true },
            react_1["default"].createElement("div", { id: "load-welcome", style: { width: '100%', height: 'auto', maxWidth: 600 } })),
        react_1["default"].createElement(core_1.Grid, { item: true },
            react_1["default"].createElement(core_1.Fade, { "in": true, timeout: 2000 },
                react_1["default"].createElement(core_1.Typography, { align: "center", variant: "h1", component: "div" },
                    react_1["default"].createElement("div", null, "Huntdora"))))));
};
