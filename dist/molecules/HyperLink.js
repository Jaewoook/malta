"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Span_1 = require("./Span");
exports.HyperLink = Span_1.Span.extend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  &:hover{\n    text-decoration-line: underline;\n  }\n  cursor: pointer;\n"], ["\n  text-decoration: none;\n  &:hover{\n    text-decoration-line: underline;\n  }\n  cursor: pointer;\n"]))).withComponent("a");
exports.HyperLink.defaultProps = {
    target: "_blank"
};
var templateObject_1;
