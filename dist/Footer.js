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
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  height: 50px;\n  padding-left: 40px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  height: 50px;\n  padding-left: 40px;\n"])), theme("colors.black.dark"));
var Copyright = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n"], ["\n  color: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n"])), theme("colors.white"), theme("fontSizes.h5"), theme("fontWeights.demiLight"));
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (React.createElement(Wrapper, null,
            React.createElement(Copyright, null, "Copyright \u00A9 2018 Salesboost. Inc")));
    };
    return Footer;
}(React.Component));
exports.Footer = Footer;
var templateObject_1, templateObject_2;
