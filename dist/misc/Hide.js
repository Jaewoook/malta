"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var theme_1 = require("../commons/theme");
exports.Hide = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (max-width: ", "){\n    display: ", ";\n  }\n\n  @media (max-width: ", ") and (min-width: ", "){\n    display: ", ";\n  }\n\n  @media (min-width: ", "){\n    display: ", ";\n  }\n"], ["\n  @media (max-width: ", "){\n    display: ", ";\n  }\n\n  @media (max-width: ", ") and (min-width: ", "){\n    display: ", ";\n  }\n\n  @media (min-width: ", "){\n    display: ", ";\n  }\n"])), theme_1.breakpoints[0], function (props) { return (props.mobile ? "none" : "block"); }, theme_1.breakpoints[1], theme_1.breakpoints[0], function (props) { return (props.tablet ? "none" : "block"); }, theme_1.breakpoints[1], function (props) { return (props.desktop ? "none" : "block"); });
var templateObject_1;
