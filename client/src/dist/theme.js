"use strict";
exports.__esModule = true;
var styles_1 = require("@material-ui/core/styles");
//global themes can be set here
var theme = styles_1.createMuiTheme({
    /*text styling */
    typography: {
        allVariants: {
            color: '#1F2F47'
        }
    },
    /*General Primary and Secondary colours */
    palette: {
        primary: {
            light: '#f5f3ed',
            main: '#f3f0e9',
            dark: '#aaa8a3',
            contrastText: '#9fdcda'
        },
        secondary: {
            light: '#9fdcda',
            main: '#87d4d1',
            dark: '#5e9492',
            contrastText: '#1f2f47'
        }
    },
    /*Style of text boxes */
    overrides: {
        MuiFilledInput: {
            input: {
                padding: '5px'
            }
        },
        MuiInputBase: {
            input: {
                padding: '5px'
            }
        }
    }
});
exports["default"] = theme = styles_1.responsiveFontSizes(theme);
