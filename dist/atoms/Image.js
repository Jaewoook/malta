"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var fit = function (props) { return "object-fit: " + props.fit + ";"; };
var position = function (props) { return "object-position: " + props.position + ";"; };
exports.Image = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styled_system_1.width, styled_system_1.height, fit, position);
exports.Image.defaultProps = {
    width: "100%",
    height: "100%",
    alt: "img",
    fit: "cover",
    position: "50% 50%"
};
var templateObject_1;
