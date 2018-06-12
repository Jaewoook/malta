"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("../theme");
function hiddenDown(breakpoint) {
    var breakpointIndex = theme_1.breakpointNames.indexOf(breakpoint);
    var breakpointValue = (Number(theme_1.breakpoints[breakpointIndex].match(/\d+/)[0]) - 1) + "px";
    var mediaQuery = "@media (max-width: " + breakpointValue + ") { \
    display: none; \
  }";
    return mediaQuery;
}
exports.hiddenDown = hiddenDown;
function hiddenUp(breakpoint) {
    var breakpointIndex = theme_1.breakpointNames.indexOf(breakpoint);
    var breakpointValue = theme_1.breakpoints[breakpointIndex];
    var mediaQuery = "@media (min-width: " + breakpointValue + ") { \
    display: none; \
  }";
    return mediaQuery;
}
exports.hiddenUp = hiddenUp;
