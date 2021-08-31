import cn from 'classnames';
import React, { forwardRef } from 'react';
import { RadioProps } from '../Radio';
import Context from './Context';
export { default as Context } from './Context';

type RadioGroupProps = {
  selected: string | number | boolean;
  name: RadioProps['name'];
  onChange: RadioProps['onChange'];
  disabled: RadioProps['disabled'];
  className?: string;
  children: string | React.ReactNode;
  [key: string]: any;
};

interface RadioGroupDefaultProps {
  component: React.ElementType;
  disabled: boolean;
}

const defaultProps: RadioGroupDefaultProps = {
  component: 'div',
  disabled: false,
};

export type RadioGroupComponent = {
  displayName?: string;
};

export const RadioGroup: RadioGroupComponent = forwardRef(
  (props: RadioGroupProps, ref) => {
    const {
      component: Component,
      className,
      name,
      disabled,
      selected,
      onChange,
      children,
      ...rest
    } = {
      ...defaultProps,
      ...props,
    };

    const classOfComponent = cn(className);

    const context = {
      name,
      disabled,
      selected,
      onChange,
    };

    return (
      <Component {...rest} ref={ref} className={classOfComponent}>
        <Context.Provider value={context}>{children}</Context.Provider>
      </Component>
    );
  },
);

export default RadioGroup;
