import React from 'react';

export interface CustomSelectPropsInterface {
  label: string;
  options: Option[];
  handler: Function;
}

type Option = { title: string; id: string };

const SelectComp: Function = (props: CustomSelectPropsInterface) => {
  return (
    <div>
      <label htmlFor='as'>{props.label}</label>
      <select
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          props.handler((event.target as HTMLSelectElement).value)
        }
      >
        <option value={0}>----</option>
        {props.options.map((option: Option) => {
          return (
            <option value={option.id} key={option.id}>
              {option.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectComp;
