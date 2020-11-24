"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Nav = void 0;
var react_1 = require("react");
var react_2 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_hook_form_1 = require("react-hook-form");
var TextField_1 = require("@material-ui/core/TextField");
var IconButton_1 = require("@material-ui/core/IconButton");
var Search_1 = require("@material-ui/icons/Search");
var Grid_1 = require("@material-ui/core/Grid");
var core_1 = require("@material-ui/core");
var loading_spinner_json_1 = require("../loading-spinner.json");
var lottie_web_1 = require("lottie-web");
exports.Nav = function (props) {
    var history = react_router_dom_1.useHistory();
    var _a = react_1["default"].useState(false), open = _a[0], setOpen = _a[1];
    var _b = react_hook_form_1.useForm(), register = _b.register, handleSubmit = _b.handleSubmit, control = _b.control;
    react_2.useEffect(function () {
        var nav = lottie_web_1["default"].loadAnimation({
            container: document.querySelector("#load-welcome-nav"),
            animationData: loading_spinner_json_1["default"],
            renderer: "svg",
            loop: false,
            autoplay: true
        });
    }, []);
    var handleBackToWelcome = function () {
        history.push('/');
    };
    /************************
     * Form utility functions
     ************************/
    var onSubmit = function (data) {
        handleCloseForm();
        console.log('Submited: ', data);
        if (data.query || data.locationName || data.distanceFrom || data.minimumSalary) {
            console.log('Submitting: ', data);
            props.addQuery(data);
            history.push('/job-search');
        }
    };
    var handleClickOpenForm = function () {
        setOpen(true);
    };
    var handleCloseForm = function () {
        setOpen(false);
    };
    function valuetext(value) {
        return value + "miles";
    }
    return (react_1["default"].createElement(Grid_1["default"], { container: true, "data-testid": "NavTop", justify: "space-evenly", spacing: 1 },
        react_1["default"].createElement(Grid_1["default"], { item: true, xs: 2 },
            react_1["default"].createElement("div", { id: "load-welcome-nav", style: { width: '100%', maxWidth: 100, height: 'auto' }, onClick: handleBackToWelcome })),
        react_1["default"].createElement(Grid_1["default"], { item: true, xs: 10 },
            react_1["default"].createElement(Grid_1["default"], { container: true, justify: "center", alignItems: "center", direction: "column" },
                react_1["default"].createElement(TextField_1["default"], { onClick: handleClickOpenForm, inputRef: register, placeholder: "Search for a job in the uk...", defaultValue: '', style: { width: '80%' }, color: 'secondary', "aria-label": "SearchBox", InputProps: {
                        startAdornment: (react_1["default"].createElement(IconButton_1["default"], { style: { color: '#666D82' }, "aria-label": "search", component: "button", onClick: handleClickOpenForm },
                            react_1["default"].createElement(Search_1["default"], { fontSize: 'large' })))
                    } }),
                react_1["default"].createElement(core_1.Dialog, { open: open, onClose: handleCloseForm, fullWidth: true, PaperProps: {
                        style: {
                            backgroundColor: '#F5CE89',
                            boxShadow: 'none'
                        }
                    } },
                    react_1["default"].createElement(core_1.List, null,
                        react_1["default"].createElement(core_1.DialogTitle, null, "Set Filters"),
                        react_1["default"].createElement("form", { onSubmit: handleSubmit(onSubmit) },
                            react_1["default"].createElement(core_1.ListItem, null,
                                react_1["default"].createElement(TextField_1["default"], { name: "query", inputRef: register, placeholder: "Search for a job in the uk...", defaultValue: '', style: { width: '80%' }, color: 'secondary', variant: 'outlined' })),
                            react_1["default"].createElement(core_1.ListItem, null,
                                react_1["default"].createElement(TextField_1["default"], { name: "locationName", inputRef: register, placeholder: "Where", defaultValue: '', style: { width: '80%' }, color: 'secondary', variant: 'outlined' })),
                            react_1["default"].createElement(core_1.ListItem, null,
                                react_1["default"].createElement(react_hook_form_1.Controller, { name: "distanceFrom", control: control, defaultValue: 10, marks: true, color: 'primary', render: function (props) { return (react_1["default"].createElement(core_1.Slider, __assign({}, props, { onChange: function (_, value) {
                                            props.onChange(value);
                                        }, getAriaValueText: valuetext, valueLabelDisplay: "auto", min: 10, max: 100, step: 10 }))); } }),
                                react_1["default"].createElement(TextField_1["default"], { name: "distanceFrom", inputRef: register, placeholder: "how far?", defaultValue: '', color: 'secondary', InputProps: {
                                        startAdornment: react_1["default"].createElement(core_1.InputAdornment, { position: "start" }, "mi")
                                    } })),
                            react_1["default"].createElement(core_1.ListItem, null,
                                react_1["default"].createElement(react_hook_form_1.Controller, { name: "minimumSalary", control: control, defaultValue: 5000, marks: true, color: 'primary', render: function (props) { return (react_1["default"].createElement(core_1.Slider, __assign({}, props, { onChange: function (_, value) {
                                            props.onChange(value);
                                        }, getAriaValueText: valuetext, valueLabelDisplay: "auto", min: 10, max: 200000, step: 50 }))); } }),
                                react_1["default"].createElement(TextField_1["default"], { name: "minimumSalary", inputRef: register, placeholder: "Approximate salary", defaultValue: '', color: 'secondary', InputProps: {
                                        startAdornment: react_1["default"].createElement(core_1.InputAdornment, { position: "start" }, "\u00A3")
                                    } })),
                            react_1["default"].createElement(core_1.DialogActions, null,
                                react_1["default"].createElement(core_1.Button, { color: "secondary", "aria-label": "search", component: "button", type: "submit", variant: "contained", startIcon: react_1["default"].createElement(Search_1["default"], null) }, "Search"),
                                react_1["default"].createElement(core_1.Button, { onClick: handleCloseForm, color: "secondary", variant: "contained" }, "Cancel")))))))));
};
