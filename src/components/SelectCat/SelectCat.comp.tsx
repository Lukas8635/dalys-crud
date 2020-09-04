import React from 'react';

import { Category } from '../../store/reducers/categoryReducer';

import classes from './SelectCat.module.scss';

interface Props {
  label: string;
  options: Category[];
  handler: Function;
  keyName?: string;
  required?: boolean;
}

export interface Option {
  title: string;
  id: string;
}

const SelectCat: React.FC<Props> = ({
  label,
  required,
  keyName,
  handler,
  options,
}) => {
  return (
    <div className={classes.formGroup}>
      <label htmlFor=''>{label}</label>
      <select
        required={required ? required : false}
        className={classes.select}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handler(keyName, (event.target as HTMLSelectElement).value)
        }
      >
        <option value={0}>----</option>
        {options.map((option) => {
          return (
            <option value={option.categoryName} key={option.categoryName}>
              {option.translations['lt']}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectCat;
