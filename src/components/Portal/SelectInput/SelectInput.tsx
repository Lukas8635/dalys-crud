import React, { useState } from "react";
import classes from "./test.module.scss";

interface SelectInputInterface {
  title: string;
  onlyNumbers?: boolean;
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
    <li>
      <label htmlFor="nzn">{props.title}</label>
      <input
        type="text"
        onChange={numberValidation}
        maxLength={7}
        value={number}
      ></input>
    </li>
  );
};

export default SelectInput;
