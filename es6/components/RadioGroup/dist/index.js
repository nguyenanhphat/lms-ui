"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.RadioGroup = void 0;
var classnames_1 = require("classnames");
var react_1 = require("react");
var Context_1 = require("./Context");
var Context_2 = require("./Context");
__createBinding(exports, Context_2, "default", "Context");
var defaultProps = {
    component: 'div',
    disabled: false
};
exports.RadioGroup = react_1.forwardRef(function (props, ref) {
    var _a = __assign(__assign({}, defaultProps), props), Component = _a.component, className = _a.className, name = _a.name, disabled = _a.disabled, selected = _a.selected, onChange = _a.onChange, children = _a.children, rest = __rest(_a, ["component", "className", "name", "disabled", "selected", "onChange", "children"]);
    var classOfComponent = classnames_1["default"](className);
    var context = {
        name: name,
        disabled: disabled,
        selected: selected,
        onChange: onChange
    };
    return (react_1["default"].createElement(Component, __assign({}, rest, { ref: ref, className: classOfComponent }), react_1["default"].createElement(Context_1["default"].Provider, { value: context }, children)));
});
exports.RadioGroup.displayName = 'RadioGroup';
exports["default"] = exports.RadioGroup;
//# sourceMappingURL=index.js.map