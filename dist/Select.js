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
var react_select_1 = require("react-select");
var styled_components_1 = require("styled-components");
var theme = require("styled-system").theme;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var Label = styled_components_1.default.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  display: inline-block;\n  font-size: ", "px;\n  font-weight: ", ";\n  margin-bottom: 16px;\n"], ["\n  color: ", ";\n  display: inline-block;\n  font-size: ", "px;\n  font-weight: ", ";\n  margin-bottom: 16px;\n"])), theme("colors.black.dark"), theme("fontSizes.h4"), theme("fontWeights.demiLight"));
var styles = {
    control: function (styles, props) {
        var isDisabled = props.isDisabled;
        return __assign({}, styles, { height: "60px", borderWidth: 1, borderRadius: 2, borderColor: "rgba(22, 27, 72, 0.2)", boxShadow: "0 2px 6px 2px rgba(22, 27, 72, 0.03)", backgroundColor: isDisabled ? "rgba(22, 27, 72, 0.05)" : "#ffffff" });
    },
    valueContainer: function (styles) {
        return __assign({}, styles, { padding: "0 20px", fontSize: "18px", color: "#162348", fontWeight: 400, opacity: 0.9 });
    },
    indicatorSeparator: function (styles) {
        return {
            display: "none",
        };
    },
    placeholder: function (styles) {
        return __assign({}, styles, { fontSize: "18px", color: "#162348", fontWeight: 300, opacity: 0.4 });
    },
    menu: function (styles) {
        return __assign({}, styles, { borderRadius: 2 });
    },
    option: function (styles, props) {
        var isFocused = props.isFocused;
        return __assign({}, styles, { height: "60px", display: "flex", alignItems: "center", padding: "0 20px", fontSize: "18px", color: "#162348", fontWeight: 400, opacity: 0.9, backgroundColor: isFocused ? "rgb(22, 27, 72, 0.05)" : "#ffffff", ":active": {
                backgroundColor: "rgb(22, 27, 72, 0.05)",
            } });
    },
};
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.renderLabel = function () {
        var label = this.props.label;
        if (label) {
            return React.createElement(Label, null, label);
        }
        return null;
    };
    Select.prototype.render = function () {
        var _a = this.props, placeholder = _a.placeholder, disabled = _a.disabled, items = _a.items;
        return (React.createElement(Wrapper, null,
            this.renderLabel(),
            React.createElement(react_select_1.default, { placeholder: placeholder || "", isDisabled: disabled, name: "item", options: items, styles: styles })));
    };
    return Select;
}(React.Component));
exports.Select = Select;
var templateObject_1, templateObject_2;
