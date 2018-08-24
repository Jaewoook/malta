"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var theme_1 = require("../commons/theme");
var borders = function () {
    var borderColor = theme_1.default.colors.black.hint;
    var focusColor = theme_1.default.colors.blue.dark;
    return {
        "border-color": borderColor,
        "box-shadow": "0 0 0 1px " + borderColor,
        ":focus": {
            outline: 0,
            "border-color": focusColor,
            "box-shadow": "0 0 0 2px " + focusColor
        }
    };
};
exports.Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  appearance: none;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  color: inherit;\n  font-size: 16px;\n  background-color: transparent;\n  border-width: 0px;\n  border-style: solid;\n  border-color: ", ";\n  padding-top: 14px;\n  padding-bottom: 14px;\n  padding-left: 12px;\n  padding-right: 12px;\n  margin: 0;\n  ::placeholder {\n    color: ", ";\n  }\n  ::-ms-clear {\n    display: none;\n  }\n  ", " ", ";\n"], ["\n  appearance: none;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  color: inherit;\n  font-size: 16px;\n  background-color: transparent;\n  border-width: 0px;\n  border-style: solid;\n  border-color: ", ";\n  padding-top: 14px;\n  padding-bottom: 14px;\n  padding-left: 12px;\n  padding-right: 12px;\n  margin: 0;\n  ::placeholder {\n    color: ", ";\n  }\n  ::-ms-clear {\n    display: none;\n  }\n  ", " ", ";\n"])), theme_1.default.colors.blue.dark, theme_1.default.colors.black._20, borders, styled_system_1.space);
var templateObject_1;
