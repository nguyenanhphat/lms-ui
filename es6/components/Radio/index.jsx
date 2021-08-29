var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import cn from "classnames";
import React, { forwardRef, useCallback, useContext, useMemo, useRef, } from "react";
import compose from "../../utils/compose";
import Icon from "../Icon";
import Input from "../Input";
import { Context } from "../RadioGroup";
import styles from "./styles.module.scss";
import { getIconByStatus, getStatusOfRadio } from "./utils";
export * from "./types";
const defaultProps = {
    component: "label",
    disabled: false,
};
export const Radio = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, disabled, onChange, value, checked, name, iconRef, iconProps, children } = _a, rest = __rest(_a, ["component", "className", "disabled", "onChange", "value", "checked", "name", "iconRef", "iconProps", "children"]);
    const context = useContext(Context);
    const checkboxName = name || context.name;
    const isDisabled = disabled || context.disabled;
    const checkIsBoolean = typeof checked === "boolean";
    const isChecked = checkIsBoolean ? checked : context.selected === value;
    const onChangeComposed = useCallback(compose(onChange, context.onChange), [
        onChange,
        context.onChange,
    ]);
    const refOfInput = useRef();
    const statusOfRadio = getStatusOfRadio(isChecked);
    const iconOfRadio = getIconByStatus(statusOfRadio);
    const classOfRoot = cn(styles.root, className, {
        [styles.disabled]: isDisabled,
        [styles.checked]: isChecked,
    });
    const _children = useMemo(() => children && <span className={styles.content}>{children}</span>, [children, styles.content]);
    return (<Component {...rest} ref={ref} className={classOfRoot} role="radio">
      <Icon {...iconProps} ref={iconRef} className={styles.icon} component={iconOfRadio}/>
      {_children}
      <Input readOnly type="radio" ref={refOfInput} name={checkboxName} value={value} className={styles.input} checked={isChecked} onChange={onChangeComposed}/>
    </Component>);
});
Radio.displayName = "Radio";
export default Radio;
//# sourceMappingURL=index.jsx.map