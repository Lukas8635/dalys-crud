import React from 'react';

import classes from './search.module.scss';

interface Props {
  label: string;
  setSearchQuery: Function;
}

const Search: React.FC<Props> = ({ label, setSearchQuery }) => {
  return (
    <li className={classes.formGroup}>
      <label htmlFor='search'>{label}</label>
      <input
        className={classes.input}
        type='text'
        id={'search'}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(event.target.value)
        }
      />
    </li>
  );
};

export default Search;
