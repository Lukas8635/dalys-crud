import React from "react";
import classes from "./test.module.scss";

interface SelectInputInterface {
  title: string;
}

const SelectInput = (props: SelectInputInterface) => {
  const numberValidation = (event: any) => {
    const target = event.target;
    target.value = target.value.replace(/[^0-9]/g, "");
    if (target.value === "") {
      return;
    } else {
      return target.value;
    }
  };

  return (
    <li>
      <label htmlFor="nzn">{props.title}</label>
      <input
        type="text"
        onKeyUp={numberValidation}
        maxLength={7}
        pattern="[0-6]*"
      />
    </li>
  );
};

export default SelectInput;
