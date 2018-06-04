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
var theme_1 = require("./theme");
var _a = require("styled-system"), color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, lineHeight = _a.lineHeight, space = _a.space;
var size = 24;
var lineThickness = 3;
var StyledCheckbox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  float: left;\n  margin-right: 12px;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 2px;\n  background-color: ", ";\n  border: solid 1px ", ";\n\n  & svg {\n    position: absolute;\n    & polyline {\n      fill: none;\n      stroke: ", ";\n      stroke-width: ", ";\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-dasharray: ", "px;\n      stroke-dashoffset: ", "px;\n      transition: all .3s ease;\n    }\n  }\n"], ["\n  position: relative;\n  float: left;\n  margin-right: 12px;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 2px;\n  background-color: ", ";\n  border: solid 1px ", ";\n\n  & svg {\n    position: absolute;\n    & polyline {\n      fill: none;\n      stroke: ", ";\n      stroke-width: ", ";\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-dasharray: ", "px;\n      stroke-dashoffset: ", "px;\n      transition: all .3s ease;\n    }\n  }\n"])), size, size, theme_1.colors.white, theme_1.colors.black._20, theme_1.colors.white, lineThickness, size, size);
var Label = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: table-cell;\n  height: ", "px;\n  pointer-events: none;\n  vertical-align: middle;\n"], ["\n  display: table-cell;\n  height: ", "px;\n  pointer-events: none;\n  vertical-align: middle;\n"])), size + 2);
var Input = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  opacity: 0;\n"], ["\n  position: absolute;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  opacity: 0;\n"])));
var Wrapper = styled_components_1.default.label(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n\n  user-select: none;\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0;\n\n  &.active {\n    & ", " {\n      color: ", ";\n    }\n    & ", " {\n      background-color: ", ";\n      border-color: ", ";\n      & svg {\n        & polyline {\n          stroke-dashoffset: 0;\n        }\n      }\n    }\n    &:hover {\n      & ", " {\n        color: ", ";\n      }\n      & ", " {\n        background-color: ", ";\n        border-color: ", ";\n      }\n    }\n  }\n  &:hover {\n    & ", " {\n      border-color: ", ";\n    }\n  }\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n\n  user-select: none;\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0;\n\n  &.active {\n    & ", " {\n      color: ", ";\n    }\n    & ", " {\n      background-color: ", ";\n      border-color: ", ";\n      & svg {\n        & polyline {\n          stroke-dashoffset: 0;\n        }\n      }\n    }\n    &:hover {\n      & ", " {\n        color: ", ";\n      }\n      & ", " {\n        background-color: ", ";\n        border-color: ", ";\n      }\n    }\n  }\n  &:hover {\n    & ", " {\n      border-color: ", ";\n    }\n  }\n"])), fontSize, fontWeight, lineHeight, space, Label, theme_1.colors.blue.royal, StyledCheckbox, theme_1.colors.blue.royal, theme_1.colors.blue.royal, Label, theme_1.colors.blue.deep, StyledCheckbox, theme_1.colors.blue.deep, theme_1.colors.blue.deep, StyledCheckbox, theme_1.colors.black.standard);
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        var checked = props.checked;
        _this.state = {
            checked: checked
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }
    Checkbox.prototype.handleInputChange = function (event) {
        var target = event.target;
        var value = target.type === "checkbox" ? target.checked : target.value;
        var name = target.name;
        this.setState({
            checked: value
        });
    };
    Checkbox.prototype.renderCheckLinePoints = function () {
        return (size * 0.2) + " " + (size * 0.45) + " "
            + (size * 0.45) + " " + (size * 0.72) + " "
            + (size * 0.8) + " " + (size * 0.25);
    };
    Checkbox.prototype.render = function () {
        var name = this.props.name;
        var checked = this.state.checked;
        return (React.createElement(Wrapper, __assign({ className: this.state.checked ? "active" : "" }, this.props),
            React.createElement(Input, { type: "checkbox", name: name, defaultChecked: checked, onChange: this.handleInputChange }),
            React.createElement(StyledCheckbox, null,
                React.createElement("svg", { width: size + "px", height: size + "px", viewBox: "0 0 " + size + " " + size },
                    React.createElement("polyline", { points: this.renderCheckLinePoints() }))),
            React.createElement(Label, null,
                this.props.name ? "(" + this.props.name + ") " : "",
                this.props.children)));
    };
    Checkbox.defaultProps = {
        checked: false,
        // color
        color: "black.dark",
        // fontSize
        fontSize: "h3",
        // fontWeight
        fontWeight: "regular",
        // lineHeight
        lineHeight: "1.44",
    };
    return Checkbox;
}(React.Component));
exports.Checkbox = Checkbox;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
