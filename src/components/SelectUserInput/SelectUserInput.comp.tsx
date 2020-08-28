import React from 'react';

// TODO: Do this component are in use and needed somewhere?

interface Props {
  title?: string;
  options: { title: string; id: string }[];
  onChange: (value: string) => void;
}

const SelectUserInput: React.FC<Props> = ({ title, options, onChange }) => (
  <li>
    <label htmlFor='title'>{title}</label>
    <select
      name=''
      // id={id}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        onChange((e.target as HTMLSelectElement).value)
      }
    >
      {options.map((item, index: number) => (
        <option key={index} value={item.title}>
          {item.title}
        </option>
      ))}
    </select>
  </li>
);

export default SelectUserInput;
