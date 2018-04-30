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
// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
var enquire;
if (typeof window !== "undefined") {
    var matchMediaPolyfill = function (mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener: function () {
            },
            removeListener: function () {
            },
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
    enquire = require("enquire.js");
}
import * as React from "react";
import { Children, cloneElement } from "react";
import classNames from "classnames";
var responsiveArray = ["xxl", "xl", "lg", "md", "sm", "xs"];
var responsiveMap = {
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1600px)",
};
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            screens: {},
        };
        return _this;
    }
    Row.prototype.componentDidMount = function () {
        var _this = this;
        Object.keys(responsiveMap)
            .map(function (screen) { return enquire.register(responsiveMap[screen], {
            match: function () {
                if (typeof _this.props.gutter !== "object") {
                    return;
                }
                _this.setState(function (prevState) {
                    return ({
                        screens: __assign({}, prevState.screens, (_a = {}, _a[screen] = true, _a)),
                    });
                    var _a;
                });
            },
            unmatch: function () {
                if (typeof _this.props.gutter !== "object") {
                    return;
                }
                _this.setState(function (prevState) {
                    return ({
                        screens: __assign({}, prevState.screens, (_a = {}, _a[screen] = false, _a)),
                    });
                    var _a;
                });
            },
            // Keep a empty destory to avoid triggering unmatch when unregister
            destroy: function () { },
        }); });
    };
    Row.prototype.componentWillUnmount = function () {
        Object.keys(responsiveMap)
            .map(function (screen) { return enquire.unregister(responsiveMap[screen]); });
    };
    Row.prototype.getGutter = function () {
        var gutter = this.props.gutter;
        if (typeof gutter === "object") {
            for (var i = 0; i <= responsiveArray.length; i++) {
                var breakpoint = responsiveArray[i];
                if (this.state.screens[breakpoint] && gutter[breakpoint] !== undefined) {
                    return gutter[breakpoint];
                }
            }
        }
        return gutter;
    };
    Row.prototype.render = function () {
        var _a = this.props, type = _a.type, justify = _a.justify, align = _a.align, className = _a.className, style = _a.style, children = _a.children, _b = _a.prefixCls, prefixCls = _b === void 0 ? "row" : _b, others = __rest(_a, ["type", "justify", "align", "className", "style", "children", "prefixCls"]);
        var gutter = this.getGutter();
        var classes = classNames((_c = {},
            _c[prefixCls] = !type,
            _c[prefixCls + "-" + type] = type,
            _c[prefixCls + "-" + type + "-" + justify] = type && justify,
            _c[prefixCls + "-" + type + "-" + align] = type && align,
            _c), className);
        var rowStyle = gutter > 0 ? __assign({ marginLeft: gutter / -2, marginRight: gutter / -2 }, style) : style;
        var cols = Children.map(children, function (col) {
            if (!col) {
                return null;
            }
            if (col.props && gutter > 0) {
                return cloneElement(col, {
                    style: __assign({ paddingLeft: gutter / 2, paddingRight: gutter / 2 }, col.props.style),
                });
            }
            return col;
        });
        var otherProps = __assign({}, others);
        delete otherProps.gutter;
        return React.createElement("div", __assign({}, otherProps, { className: classes, style: rowStyle }), cols);
        var _c;
    };
    Row.defaultProps = {
        gutter: 0,
    };
    return Row;
}(React.Component));
export default Row;
