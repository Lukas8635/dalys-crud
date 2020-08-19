import React from 'react';

export interface CustomSelectPropsInterface {
  selectCompLabel: string | number;
  optionsArray: (string | number)[];
}

const SelectComp: Function = (props: CustomSelectPropsInterface) => {
  return (
    <div>
      <label htmlFor='as'>{props.selectCompLabel}</label>

      <select>
        <option value={0}>----</option>
        {props.optionsArray.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectComp;
