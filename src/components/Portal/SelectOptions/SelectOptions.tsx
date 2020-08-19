import React from "react";
import { CarCollectByBrand } from "../../Data/Data";

interface SelectComponentInterface {
  title?: string;
  // id: string;
  option: { pav: string; id: string }[];
  // keyDB: string;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
    // key: string,
    value: string
  ) => void;
}

const SelectOptions: React.FC<SelectComponentInterface> = ({
  title,
  // id,
  option,
  // keyDB,
  onChange,
}) => {
  console.log(option);
  return (
    <li>
      <label htmlFor="title">{title}</label>
      <select
        name=""
        // id={id}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(e, (e.target as HTMLSelectElement).value)
        }
      >
        {option.map((item, index: number) => (
          <option key={index} value={item.pav}>
            {item.pav}
          </option>
        ))}
      </select>
    </li>
  );
};

export default SelectOptions;
