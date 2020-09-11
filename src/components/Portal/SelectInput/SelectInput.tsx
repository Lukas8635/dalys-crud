import React, { useState } from "react";
import classes from "./SelectInput.module.scss";
import { register } from "../../../serviceWorker";

interface SelectInputInterface {
  title: string;
  onlyNumbers?: boolean;
  required?: boolean;
}

const SelectInput = (
  props: SelectInputInterface,
  onlyNumbers: true | false
) => {
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const checkValidation = (value: any, regEx: any) =>
    value === "" || regEx.test(value) ? true : false;

  //check validation for emtry strings
  const checkStringValidation = (e: any) => {
    if (e.target.value === "") {
      console.log("irasykite skaiciu");
    }
  };

  const handleInput = (value: any) => {
    const re = /^[0-9\b]+$/;
    const isInputValid = checkValidation(value, re);
    return isInputValid
      ? (setIsValid(true), setNumber(value))
      : setIsValid(false);
  };

  return (
    <li className={classes.formGroup}>
      <label htmlFor="#">{props.title}</label>
      <input
        className={`${classes.input} ${isValid ? "" : classes.inValid}`}
        type="text"
        // onChange={(event)=> handleInput(event.target.value)}
        onChange={(event) => handleInput(event.target.value)}
        maxLength={7}
      ></input>
    </li>
  );
};

export default SelectInput;
