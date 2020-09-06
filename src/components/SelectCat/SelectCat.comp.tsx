import React from 'react';

import {
  Category,
  SubCategory,
  PartName,
} from '../../store/reducers/categoryReducer';

import classes from './SelectCat.module.scss';

interface Props {
  label: string;
  options: Category[] | SubCategory[] | PartName[];
  handler: Function;
  selector?: Function;
  selectorKey?: string;
  keyName?: string;
  required?: boolean;
}

const SelectCat: React.FC<Props> = ({
  label,
  required,
  keyName,
  selectorKey,
  handler,
  selector,
  options,
}) => {
  return (
    <div className={classes.formGroup}>
      <label htmlFor=''>{label}</label>
      <select
        required={required ? required : false}
        className={classes.select}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handler(
            keyName,
            (event.target as HTMLSelectElement).value,
            selector,
            selectorKey
          )
        }
      >
        <option value={0}>----</option>
        {(options as (Category | SubCategory | PartName)[]).map((option) => {
          // FIXME: TODO: This log is for debugging misspelling of 'translation' word in DB
          console.log(option.translations);
          return (
            <option value={option._id} key={option._id}>
              {option.translations['lt']}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectCat;
