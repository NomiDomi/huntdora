"use strict";
exports.__esModule = true;
exports.EmptyList = void 0;
var react_1 = require("react");
var _33692_puzzle_animation_json_1 = require("../33692-puzzle-animation.json");
var lottie_web_1 = require("lottie-web");
var core_1 = require("@material-ui/core");
exports.EmptyList = function () {
    react_1.useEffect(function () {
        var empty = lottie_web_1["default"].loadAnimation({
            container: document.querySelector("#puzzle-animation"),
            animationData: _33692_puzzle_animation_json_1["default"],
            renderer: "svg",
            loop: false,
            autoplay: true
        });
        return function () {
            empty.destroy();
        };
    }, []);
    return (react_1["default"].createElement(core_1.Grid, { container: true, "data-testid": "EmptyList", justify: "center", alignItems: 'center', style: { height: '70vh' } },
        react_1["default"].createElement(core_1.Grid, { item: true },
            react_1["default"].createElement("div", { id: "puzzle-animation", style: { width: 200, height: 200 } }),
            react_1["default"].createElement(core_1.Typography, { align: "center", variant: "h6" },
                react_1["default"].createElement("div", null, "No Jobs Here!")))));
};
