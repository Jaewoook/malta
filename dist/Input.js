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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var theme = require("styled-system").theme;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var Label = styled_components_1.default.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  display: inline-block;\n  font-size: ", "px;\n  font-weight: ", ";\n  margin-bottom: 16px;\n"], ["\n  color: ", ";\n  display: inline-block;\n  font-size: ", "px;\n  font-weight: ", ";\n  margin-bottom: 16px;\n"])), theme("colors.black.dark"), theme("fontSizes.h4"), theme("fontWeights.demiLight"));
var ErrorLabel = Label.extend(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: #f51a1a;\n  margin-top: 10px;\n"], ["\n  color: #f51a1a;\n  margin-top: 10px;\n"])));
var StyledInput = styled_components_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: #ffffff;\n  border: solid 1px ", ";\n  border-radius: 2px;\n  box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.03);\n  color: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  height: 60px;\n  padding: 0 20px;\n  width: 100%;\n\n  &:disabled {\n    background-color: rgba(22, 27, 72, 0.05);\n  }\n\n  &:focus {\n    border: solid 1px ", "\n    outline: none;\n  }\n"], ["\n  background-color: #ffffff;\n  border: solid 1px ", ";\n  border-radius: 2px;\n  box-shadow: 0 2px 6px 2px rgba(22, 27, 72, 0.03);\n  color: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  height: 60px;\n  padding: 0 20px;\n  width: 100%;\n\n  &:disabled {\n    background-color: rgba(22, 27, 72, 0.05);\n  }\n\n  &:focus {\n    border: solid 1px ", "\n    outline: none;\n  }\n"])), function (props) { return props.error ? "#f51a1a" : "rgba(22, 27, 72, 0.2)"; }, theme("colors.black.dark"), theme("fontSizes.h3"), theme("fontWeights.demiLight"), function (props) { return props.error ? "#f51a1a" : "#454edf"; });
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.renderLabel = function () {
        var label = this.props.label;
        if (label) {
            return React.createElement(Label, null, label);
        }
        return null;
    };
    Input.prototype.renderErrorLabel = function () {
        var _a = this.props, error = _a.error, errorMessage = _a.errorMessage;
        if (error && errorMessage) {
            return React.createElement(ErrorLabel, null, errorMessage);
        }
        return null;
    };
    Input.prototype.render = function () {
        var _a = this.props, placeholder = _a.placeholder, disabled = _a.disabled, error = _a.error;
        return (React.createElement(Wrapper, null,
            this.renderLabel(),
            React.createElement(StyledInput, { placeholder: placeholder, disabled: disabled, error: error }),
            this.renderErrorLabel()));
    };
    return Input;
}(React.Component));
exports.Input = Input;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
