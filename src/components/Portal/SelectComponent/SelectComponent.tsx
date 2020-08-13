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

// interface SelectComponentProps{
//     id:string;f
//     option:test;
// }

// interface test {
//     title:string;
//     kategorija: kategorijosinterfate[]
// }

// interface kategorijosinterfate{
//     pav: string;
//     id:string
// }

// {
//     pav:'audi',
//     id:'audi1',
// },
// {
//     pav:'bmw',
//     id:'bmw1',
// },
// {
//     pav:'mb',
//     id:'mb1',
// },
// {
//     pav:'kita',
//     id:'kita1',
// }
