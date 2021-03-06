import React, { useState } from 'react';

import classes from './Input.module.scss';

interface Props {
  title: string;
  setValue: Function;
  keyName: string;
  isRequired?: boolean;
  regExp?: RegExp;
  maxLength?: number;
}

const Input: React.FC<Props> = ({
  title,
  keyName,
  setValue,
  isRequired,
  regExp,
  maxLength,
}) => {

  const [isValid, setIsValid] = useState(true);

  const checkValidation = (value: string, regEx: RegExp) =>
    value === '' || regEx.test(value) ? true : false;

  const handleInput = (value: string) => {
    let isInputValid = true;
    if (!!regExp) {
      isInputValid = checkValidation(value, regExp);
    }
    return isInputValid
      ? (setIsValid(true), setValue(keyName, value))
      : setIsValid(false);
  };

  return (
    <div >
      {/* <label htmlFor='#'>{title}</label> */}
      <input
        placeholder={title}
        className={`${classes.input} ${isValid ? '' : classes.invalid}`}
        type='text'
        required={isRequired}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInput(event.target.value)
        }
        maxLength={maxLength}
      ></input>
    </div>
  );
};

export default Input;
