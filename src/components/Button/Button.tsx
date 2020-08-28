import React from 'react';
import classes from './Button.module.scss';

// TODO: Refactor this component.

interface ButtonInterface {
  btnType?: string;
  children: React.ReactNode;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  disabled?: boolean;
  type?: string;
  id?: number;
}

const Button = (props: ButtonInterface) => {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
