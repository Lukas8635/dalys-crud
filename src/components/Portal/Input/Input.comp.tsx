import React, { useState } from 'react';
import classes from './Input.module.scss';

interface Props {
  title: string;
  isRequired?: boolean;
}

const Input: React.FC<Props> = ({ title, isRequired }) => {
  const [number, setNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const checkValidation = (value: any, regEx: any) =>
    value === '' || regEx.test(value) ? true : false;

  const handleInput = (value: any) => {
    const re = /^[0-9\b]+$/;
    const isInputValid = checkValidation(value, re);
    return isInputValid
      ? (setIsValid(true), setNumber(value))
      : setIsValid(false);
  };

  return (
    <li className={classes.formGroup}>
      <label htmlFor='#'>{title}</label>
      <input
        className={`${classes.input} ${isValid ? '' : classes.inValid}`}
        type='text'
        required={isRequired}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInput(event.target.value)
        }
        maxLength={7}
      ></input>
    </li>
  );
};

export default Input;
