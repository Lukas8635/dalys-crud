import React from 'react';

import classes from './SelectComp.module.scss';

interface Props {
  label: string;
  options: Option[];
  handler: Function;
}

export interface Option {
  title: string;
  id: string;
}

const SelectComp: React.FC<Props> = ({ label, options, handler }) => {
  return (
    <div className={classes.formGroup}>
      <label htmlFor='as'>{label}</label>
      <select 
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
