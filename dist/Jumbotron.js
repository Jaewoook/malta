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
var _a = require("styled-system"), color = _a.color, space = _a.space;
var Div = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), color, space);
var Jumbotron = /** @class */ (function (_super) {
    __extends(Jumbotron, _super);
    function Jumbotron() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jumbotron.prototype.render = function () {
        return (React.createElement(Div, __assign({}, this.props), this.props.children));
    };
    Jumbotron.defaultProps = {
        // color
        bg: "black._5",
        // space
        m: 0,
        p: 3,
    };
    return Jumbotron;
}(React.Component));
exports.Jumbotron = Jumbotron;
var templateObject_1;
