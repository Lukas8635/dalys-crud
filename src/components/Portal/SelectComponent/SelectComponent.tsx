import React from "react";

interface SelectComponentInterface {
  title: string;
  id: string;
  option: { pav: string; id: string }[];
}

const SelectComponent = (props: SelectComponentInterface) => (
  <li>
    <label htmlFor="brand">{props.title}</label>
    <select name="" id={props.id}>
      {props.option.map((item) => (
        <option value="">{item.pav}</option>
      ))}
    </select>
  </li>
);

export default SelectComponent;


