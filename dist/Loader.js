"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var styled_components_1 = require("styled-components");
var _a = require("styled-system"), color = _a.color, height = _a.height, width = _a.width;
var animation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n"], ["\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n"])));
var common = "\n  border-radius: 50%;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: " + animation + " 1.8s infinite ease-in-out;\n  animation: " + animation + " 1.8s infinite ease-in-out;\n";
var beforeAndAfter = "\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: inherit;\n  height: inherit;\n";
var StyledLoader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  display : ", ";\n\n  font-size: 10px;\n  margin: 80px auto;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n\n  &:before {\n    ", "\n    ", "\n    left: -3em;\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n  }\n  &:after {\n    ", "\n    ", "\n    left: 3em;\n  }\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  display : ", ";\n\n  font-size: 10px;\n  margin: 80px auto;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n\n  &:before {\n    ", "\n    ", "\n    left: -3em;\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n  }\n  &:after {\n    ", "\n    ", "\n    left: 3em;\n  }\n"])), common, color, height, width, function (props) { return props.show ? "inherit" : "none"; }, common, beforeAndAfter, common, beforeAndAfter);
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loader.prototype.render = function () {
        var show = this.props.show;
        return (React.createElement(StyledLoader, __assign({ show: show }, this.props)));
    };
    Loader.defaultProps = {
        // color
        color: "black.hint",
        // height
        height: "1.5em",
        // width
        width: "1.5em",
        show: false
    };
    return Loader;
}(React.Component));
exports.Loader = Loader;
var templateObject_1, templateObject_2;
