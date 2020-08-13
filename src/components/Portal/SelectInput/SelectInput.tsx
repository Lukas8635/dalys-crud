import React from "react";

interface SelectInputInterface {
  title:string;
}

const SelectInput = (props:SelectInputInterface) => (
  <li>
    <label htmlFor="nzn">{props.title}</label>
    <input type="text" />
  </li>
);

export default SelectInput;
