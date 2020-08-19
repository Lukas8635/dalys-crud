import React from 'react';

interface Props {
  title?: string;
  option: { pav: string; id: string }[];
  onChange: (value: string) => void;
}

const SelectUserInput: React.FC<Props> = ({ title, option, onChange }) => (
  <li>
    <label htmlFor='title'>{title}</label>
    <select
      name=''
      // id={id}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        onChange((e.target as HTMLSelectElement).value)
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

export default SelectUserInput;
