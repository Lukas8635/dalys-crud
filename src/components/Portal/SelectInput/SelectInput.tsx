import React, { useState } from "react";
import classes from "./SelectInput.module.scss";

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

  //numbers validation for writing only numbers
  const numberValidation = (e: any) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setNumber(e.target.value);
    }
  };

  return (
    <li className={classes.formGroup}>
      <label htmlFor="#">{props.title}</label>
      <input
        // required={true}
        className={classes.input}
        type="text"
        onChange={numberValidation}
        maxLength={7}
        value={number}
      ></input>
    </li>
  );
};

export default SelectInput;
