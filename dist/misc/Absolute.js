"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
exports.Absolute = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  ", " ", " ", " ", "\n  ", "\n"], ["\n  position: absolute;\n  ", " ", " ", " ", "\n  ", "\n"])), styled_system_1.top, styled_system_1.bottom, styled_system_1.left, styled_system_1.right, styled_system_1.zIndex);
var templateObject_1;
