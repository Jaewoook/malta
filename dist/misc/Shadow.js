"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("../atoms/Box");
var theme_1 = require("../commons/theme");
var boxShadow = function (props) { return "box-shadow: " + theme_1.shadow[props.shadow] + ";"; };
exports.Shadow = Box_1.Box.extend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: fit-content;\n  height: auto;\n  overflow-hidden;\n  ", "\n"], ["\n  width: fit-content;\n  height: auto;\n  overflow-hidden;\n  ", "\n"])), boxShadow);
var templateObject_1;
