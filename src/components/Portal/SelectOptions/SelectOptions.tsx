import React from "react";

interface SelectComponentInterface {
  title?: string;
  // id: string;
  options: { title: string; id: string }[];
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
  options,
  // keyDB,
  onChange,
}) => {
  return (
    <li>
      <label htmlFor='title'>{title}</label>
      <select
        name=''
        // id={id}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(e, (e.target as HTMLSelectElement).value)
        }
      >
        <option value={0}>----</option>
        {options.map((item, index: number) => (
          <option key={index} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>
    </li>
  );
};

export default SelectOptions;
