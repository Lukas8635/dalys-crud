import React from "react";

import classes from "./SelectComp.module.scss";
import { title } from "process";

interface Props {
  placeholder: string;
  options: Option[];
  handler: Function;
  keyName?: string;
  required?: boolean;
}

export interface Option {
  title: string;
  id: string;
}

const SelectComp: React.FC<Props> = ({
  placeholder,
  options,
  handler,
  keyName,
  required,
}) => {
  return (
    <div className={classes.main }>
      <div className={classes.selectComponent}>
        <select
          placeholder={title}
          required={required ? required : false}
          className={classes.selectArrow}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            handler(keyName, (event.target as HTMLSelectElement).value)
          }
        >
          <option value={0}  hidden>
            {placeholder}
          </option>
          {options.map((option: Option) => {
            return (
              <option value={option.id} key={option.id}>
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectComp;
