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
var __exportStar = (this && this.__exportStar) || function (m, exports) {
    for (var p in m)
        if (p !== "default" && !exports.hasOwnProperty(p))
            __createBinding(exports, m, p);
};
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
exports.Radio = void 0;
var classnames_1 = require("classnames");
var react_1 = require("react");
var compose_1 = require("../../utils/compose");
var Icon_1 = require("../Icon");
var Input_1 = require("../Input");
var RadioGroup_1 = require("../RadioGroup");
var styles_module_scss_1 = require("./styles.module.scss");
var utils_1 = require("./utils");
__exportStar(require("./types"), exports);
var defaultProps = {
    component: "label",
    disabled: false
};
exports.Radio = react_1.forwardRef(function (props, ref) {
    var _a;
    var _b = __assign(__assign({}, defaultProps), props), Component = _b.component, className = _b.className, disabled = _b.disabled, onChange = _b.onChange, value = _b.value, checked = _b.checked, name = _b.name, iconRef = _b.iconRef, iconProps = _b.iconProps, children = _b.children, rest = __rest(_b, ["component", "className", "disabled", "onChange", "value", "checked", "name", "iconRef", "iconProps", "children"]);
    var context = react_1.useContext(RadioGroup_1.Context);
    var checkboxName = name || context.name;
    var isDisabled = disabled || context.disabled;
    var checkIsBoolean = typeof checked === "boolean";
    var isChecked = checkIsBoolean ? checked : context.selected === value;
    var onChangeComposed = react_1.useCallback(compose_1["default"](onChange, context.onChange), [
        onChange,
        context.onChange,
    ]);
    var refOfInput = react_1.useRef();
    var statusOfRadio = utils_1.getStatusOfRadio(isChecked);
    var iconOfRadio = utils_1.getIconByStatus(statusOfRadio);
    var classOfRoot = classnames_1["default"](styles_module_scss_1["default"].root, className, (_a = {},
        _a[styles_module_scss_1["default"].disabled] = isDisabled,
        _a[styles_module_scss_1["default"].checked] = isChecked,
        _a));
    var _children = react_1.useMemo(function () { return children && react_1["default"].createElement("span", { className: styles_module_scss_1["default"].content }, children); }, [children, styles_module_scss_1["default"].content]);
    return (react_1["default"].createElement(Component, __assign({}, rest, { ref: ref, className: classOfRoot, role: "radio" }), react_1["default"].createElement(Icon_1["default"], __assign({}, iconProps, { ref: iconRef, className: styles_module_scss_1["default"].icon, component: iconOfRadio })), _children, react_1["default"].createElement(Input_1["default"], { readOnly: true, type: "radio", ref: refOfInput, name: checkboxName, value: value, className: styles_module_scss_1["default"].input, checked: isChecked, onChange: onChangeComposed })));
});
exports["default"] = exports.Radio;
//# sourceMappingURL=index.js.map