import React from 'react';

import classes from './SelectComp.module.scss';

interface Props {
  label: string;
  options: Option[];
  handler: Function;
  required?: boolean;
}

export interface Option {
  title: string;
  id: string;
}

const SelectComp: React.FC<Props> = ({ label, options, handler, required }) => {
  return (
    <div className={classes.formGroup}>
      <label htmlFor=''>{label}</label>
      <select
        required={required ? required : false}
        className={classes.select}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handler((event.target as HTMLSelectElement).value)
        }
      >
        <option value={0}>----</option>
        {options.map((option: Option) => {
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
