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

  const numberValidation = (e: any) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setNumber(e.target.value);
    }
  };
  // const handlerChange = (onlyNumbers)=>{

  // }

  return (
    <li className={classes.formGroup}>
      <label htmlFor="#">{props.title}</label>
      <input className={classes.input}
        type="text"
        onChange={numberValidation}
        maxLength={7}
        value={number}
      ></input>
    </li>
  );
};

export default SelectInput;
