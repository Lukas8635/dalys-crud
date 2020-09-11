import React from 'react';
import search from '../../img/search.svg'
import classes from './Search.module.scss';

interface Props {
  label: string;
  setSearchQuery: Function;
}

const Search: React.FC<Props> = ({ label, setSearchQuery }) => {
  return (
    <li >
      
      <input
        placeholder={label}
        className={classes.input}
        type='text'
        id={'search'}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(event.target.value)
        }
      /> 
      <img src={search} alt="search"/>
    </li>
  );
};

export default Search;
