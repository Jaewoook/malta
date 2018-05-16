"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var grid_styled_1 = require("grid-styled");
var theme_1 = require("./theme");
exports.Main = function (props) {
    var fullScreen = props.fullScreen, children = props.children, restProps = __rest(props, ["fullScreen", "children"]);
    if (props.fullScreen) {
        return (React.createElement(grid_styled_1.Box, __assign({}, restProps, { mb: "-" + theme_1.footerHeight, pb: theme_1.footerHeight, pt: theme_1.navBarHeight, style: { display: "flex", justifyContent: "center", minHeight: "100%" } }),
            React.createElement(grid_styled_1.Flex, { alignItems: "center", flexDirection: "column", justifyContent: "center" }, children)));
    }
    return (React.createElement(grid_styled_1.Box, __assign({}, props, { mb: "-" + theme_1.footerHeight, pb: theme_1.footerHeight, pt: theme_1.navBarHeight, style: { minHeight: "100%" } })));
};
