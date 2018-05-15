"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var grid_styled_1 = require("grid-styled");
var theme_1 = require("./theme");
exports.Container = function (props) { return (React.createElement(grid_styled_1.Box, __assign({}, props, { mx: "auto", style: { minHeight: "100%", maxWidth: theme_1.containerWidth } }))); };
