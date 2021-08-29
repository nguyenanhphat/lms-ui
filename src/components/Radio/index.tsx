import cn from "classnames";
import React, {
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from "react";
import compose from "../../utils/compose";
import Icon from "../Icon";
import Input from "../Input";
import { Context } from "../RadioGroup";
import styles from "./styles.module.scss";
import { getIconByStatus, getStatusOfRadio } from "./utils";
export * from "./types";

export type RadioProps = {
  name?: string;
  iconRef?: React.Ref<any>;
  iconProps?: { [key: string]: string };
  checked?: boolean;
  value: string | number | boolean;
  onChange?: React.EventHandler<React.SyntheticEvent>;
  disabled?: boolean;
  className?: string;
  children?: string | React.ReactNode;
};

interface RadioDefaultProps {
  component: React.ElementType;
  disabled: boolean;
}

const defaultProps: RadioDefaultProps = {
  component: "label",
  disabled: false,
};

export type RadioComponent = {
  displayName?: string;
};

export const Radio: RadioComponent = forwardRef((props: RadioProps, ref) => {
  const {
    component: Component,
    className,
    disabled,
    onChange,
    value,
    checked,
    name,
    iconRef,
    iconProps,
    children,
    ...rest
  } = { ...defaultProps, ...props };

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

  const _children = useMemo(
    () => children && <span className={styles.content}>{children}</span>,
    [children, styles.content]
  );

  return (
    <Component {...rest} ref={ref} className={classOfRoot} role="radio">
      <Icon
        {...iconProps}
        ref={iconRef}
        className={styles.icon}
        component={iconOfRadio}
      />
      {_children}
      <Input
        readOnly
        type="radio"
        ref={refOfInput}
        name={checkboxName}
        value={value}
        className={styles.input}
        checked={isChecked}
        onChange={onChangeComposed}
      />
    </Component>
  );
});

export default Radio;
