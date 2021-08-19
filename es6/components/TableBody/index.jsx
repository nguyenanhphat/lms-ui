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
import cn from 'classnames';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
const defaultProps = {
    component: 'tbody',
};
export const TableBody = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className } = _a, rest = __rest(_a, ["component", "className"]);
    return <Component {...rest} className={cn(styles.tableBody, className)} ref={ref}/>;
});
export default TableBody;
//# sourceMappingURL=index.jsx.map