"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var fit = function (props) { return "object-fit: " + props.fit + ";"; };
var position = function (props) { return "object-position: " + props.position + ";"; };
exports.Image = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  ", "\n  ", "\n"], ["\n  width: 100%;\n  height: 100%;\n  ", "\n  ", "\n"])), fit, position);
exports.Image.defaultProps = {
    alt: "img"
};
var templateObject_1;
