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
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0.5rem 0;\n"], ["\n  margin: 0.5rem 0;\n"])));
var ErrorWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height:1.5rem;\n  display:block;\n  position: relative;\n"], ["\n  height:1.5rem;\n  display:block;\n  position: relative;\n"])));
var StyledInput = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n  border: ", ";\n  width: 100%;\n  border-rasius: 0;\n  background: transparent;\n  display: block;\n  padding: 1rem;\n  font-size: 1rem;\n  box-sizing: border-box;\n  &:focus {\n    outline: none;\n  }\n"], ["\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n  border: ",
    ";\n  width: 100%;\n  border-rasius: 0;\n  background: transparent;\n  display: block;\n  padding: 1rem;\n  font-size: 1rem;\n  box-sizing: border-box;\n  &:focus {\n    outline: none;\n  }\n"])), function (props) {
    return props.error ? "solid 1px #ff244e" : "solid 1px #22409a";
});
var Error = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 12px;\n  color: #ff244e;\n  position: absolute;\n  display: inline-block;\n  padding: 0 2%;\n"], ["\n  font-size: 12px;\n  color: #ff244e;\n  position: absolute;\n  display: inline-block;\n  padding: 0 2%;\n"])));
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        return _super.call(this, props) || this;
    }
    Input.prototype.renderError = function (touched, error) {
        if (!this.props.noUseError) {
            return (React.createElement(ErrorWrapper, null, touched && error && React.createElement(Error, null, error)));
        }
    };
    Input.prototype.render = function () {
        var _a = this.props, btnType = _a.btnType, type = _a.type, input = _a.input, _b = _a.meta, touched = _b.touched, error = _b.error, props = __rest(_a, ["btnType", "type", "input", "meta"]);
        return (React.createElement(Wrapper, null,
            React.createElement(StyledInput, __assign({ btnType: btnType, type: type, error: touched && error }, Object.assign({}, input, props))),
            this.renderError(touched, error)));
    };
    return Input;
}(React.Component));
exports.Input = Input;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
