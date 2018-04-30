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
import * as React from "react";
import classNames from "classnames";
var Col = /** @class */ (function (_super) {
    __extends(Col, _super);
    function Col() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Col.prototype.render = function () {
        var props = this.props;
        var span = props.span, order = props.order, offset = props.offset, push = props.push, pull = props.pull, className = props.className, children = props.children, _a = props.prefixCls, prefixCls = _a === void 0 ? "col" : _a, others = __rest(props, ["span", "order", "offset", "push", "pull", "className", "children", "prefixCls"]);
        var sizeClassObj = {};
        ["xs", "sm", "md", "lg", "xl", "xxl"].forEach(function (size) {
            var sizeProps = {};
            if (typeof props[size] === "number") {
                sizeProps.span = props[size];
            }
            else if (typeof props[size] === "object") {
                sizeProps = props[size] || {};
            }
            delete others[size];
            if (size === "xs") {
                sizeClassObj = __assign({}, sizeClassObj, (_a = {}, _a[prefixCls + "-" + sizeProps.span] = sizeProps.span !== undefined, _a["order-" + sizeProps.order] = sizeProps.order || sizeProps.order === 0, _a["offset-" + sizeProps.offset] = sizeProps.offset || sizeProps.offset === 0, _a["push-" + sizeProps.push] = sizeProps.push || sizeProps.push === 0, _a["pull-" + sizeProps.pull] = sizeProps.pull || sizeProps.pull === 0, _a));
            }
            else {
                sizeClassObj = __assign({}, sizeClassObj, (_b = {}, _b[prefixCls + "-" + size + "-" + sizeProps.span] = sizeProps.span !== undefined, _b["order-" + size + "-" + sizeProps.order] = sizeProps.order || sizeProps.order === 0, _b["offset-" + size + "-" + sizeProps.offset] = sizeProps.offset || sizeProps.offset === 0, _b["push-" + size + "-" + sizeProps.push] = sizeProps.push || sizeProps.push === 0, _b["pull-" + size + "-" + sizeProps.pull] = sizeProps.pull || sizeProps.pull === 0, _b));
            }
            var _a, _b;
        });
        var classes = classNames((_b = {},
            _b[prefixCls + "-" + span] = span !== undefined,
            _b["order-" + order] = order,
            _b["offset-" + offset] = offset,
            _b["push-" + push] = push,
            _b["pull-" + pull] = pull,
            _b), className, sizeClassObj);
        return React.createElement("div", __assign({}, others, { className: classes }), children);
        var _b;
    };
    return Col;
}(React.Component));
export default Col;
