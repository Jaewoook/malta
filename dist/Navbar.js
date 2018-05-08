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
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  height: 70px;\n  left: 0;\n  padding-left: 40px;\n  padding-right: 40px;\n  position: absolute;\n  right: 0;\n  top: 0;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  height: 70px;\n  left: 0;\n  padding-left: 40px;\n  padding-right: 40px;\n  position: absolute;\n  right: 0;\n  top: 0;\n"])), theme("colors.white"));
var Logo = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 34px;\n  width: 125px;\n"], ["\n  height: 34px;\n  width: 125px;\n"])));
var Right = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  text-align: right;\n"], ["\n  flex: 1;\n  text-align: right;\n"])));
var Title = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n"], ["\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n"])), theme("fontSizes.h5"), theme("fontWeights.regular"), theme("colors.black.dark"));
var Description = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin-top: 4px;\n"], ["\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n  margin-top: 4px;\n"])), theme("fontSizes.h5"), theme("fontWeights.demiLight"), theme("colors.black.standard"));
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navbar.prototype.render = function () {
        var _a = this.props, title = _a.title, description = _a.description;
        return (React.createElement(Wrapper, null,
            React.createElement(Logo, { src: require("./images/img-gnb-logo.png") }),
            React.createElement(Right, null,
                React.createElement(Title, null, title),
                React.createElement(Description, null, description))));
    };
    return Navbar;
}(React.Component));
exports.Navbar = Navbar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
