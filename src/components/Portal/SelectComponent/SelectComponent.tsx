import React from 'react';

interface SelectComponentInterface {
  title: string;
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
  <li>
    <label htmlFor='brand'>{title}</label>
    <select
      name=''
      id={id}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(e, keyDB, (e.target as HTMLSelectElement).value)
      }
    >
      {option.map((item) => (
        <option value={item.id}>{item.pav}</option>
      ))}
    </select>
  </li>
);}

export default SelectComponent;


