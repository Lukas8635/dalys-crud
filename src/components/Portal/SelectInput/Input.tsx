import React, { ChangeEvent } from 'react';

export interface InputPropsInterface {
  id: number;
  elementType: string;
  elementConfig: ElementConfigProps;
  style: string;
  value: string;
  changed: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    id: number
  ) => void;
  onlyNumbers?: boolean;
  maxLength?: number;
}

interface ElementConfigProps {
  type?: string;
  placeholder?: string;
  options?: option[];
}
interface option {
  value: string;
  displayValue: string;
}

const Input = (props: InputPropsInterface) => {
  let inputElement;

  const inputIsValid = (inputValue: string) => {
    const regex = /^[0-9\b]+$/;

    if (props.onlyNumbers) {
      return inputValue === "" || regex.test(inputValue);
    }

    return true;
  };

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (inputIsValid(event.target.value)) {
      props.changed(event, props.id);
    }
  };

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          value={props.value}
          className={props.style}
          onChange={onChange}
          {...props.elementConfig}
        />
      );
      break;
      default: 
        inputElement = null;
      }
      return inputElement;
}
export default Input;