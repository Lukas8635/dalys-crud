import React from "react";
import { brand1 } from "../../Data/Data";

interface SelectComponentInterface {
  title?: string;
  id: string;
  option: { pav: string; id: string }[];
  keyDB: string;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
    key: string,
    value: string
  ) => void;
}

const SelectComponent: React.FC<SelectComponentInterface> = ({
  title,
  id,
  option,
  keyDB,
  onChange,
}) => {
  return (
    <li key={id}>
      <label htmlFor="title">{title}</label>
      <select
        name=""
        id={id}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(e, keyDB, (e.target as HTMLSelectElement).value)
        }
      >
        {option.map((item) => (
          
          <option value={item.pav}>{item.pav}</option>
          
        ))}
        
      </select>
    </li>
  );
};

export default SelectComponent;
