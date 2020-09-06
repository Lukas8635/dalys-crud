import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../../Search/Search.comp';
import SelectCat from '../../SelectCat/SelectCat.comp';
import Spinner from '../../Spinner/Spinner.comp';

import { fetchCat, setSelection } from '../../../store/actions/categoryActions';
import { StoreState } from '../../../store/store';
import { InitialState } from '../../../store/reducers/categoryReducer';

// import classes from './Categories.module.scss';


const Categories = () => {
  const categories = useSelector(
    (state: StoreState) => state.categories.categories
  );
  const subCategories = useSelector(
    (state: StoreState) => state.categories.subcategories
  );

  const partNames = useSelector(
    (state: StoreState) => state.categories.partNames
  );

  const state = useSelector((state: StoreState) => state.categories);

  console.log(state);

  const dispatch = useDispatch();

  // TODO: Only needed to prevent app from breaking. REMOVE when redux is fully implemented
  const [, setSearchQuery] = useState('');

  /**
   *  Gets all Categories, subCategories ant Part names from DB
   */
  useEffect(() => {
    dispatch(fetchCat());
  }, []);

  //  TODO: change logic - use boolean var to check if data is loaded, not the categories.length
  return (
    <div>
      {categories.length ? (
        <div>
          <Search
            label={'Detalės pavadinimo paieška'}
            setSearchQuery={setSearchQuery}
          />
          <SelectCat
            label={'Kategorija'}
            keyName={'subcategories'}
            selectorKey={'categories'}
            required={true}
            handler={(
              key: string,
              selection: string,
              selector: Function,
              selectorKey: string
            ) => dispatch(setSelection(key, selection, selector, selectorKey))}
            selector={(state: InitialState, key: keyof InitialState) =>
              state[key]
            }
            options={categories}
          />
          <SelectCat
            label={'Subkategorija'}
            keyName={'partNames'}
            selectorKey={'subcategories'}
            required={true}
            handler={(
              key: string,
              selection: string,
              selector: Function,
              selectorKey: string
            ) => dispatch(setSelection(key, selection, selector, selectorKey))}
            selector={(state: InitialState, key: keyof InitialState) =>
              state[key]
            }
            options={subCategories}
          />
          <SelectCat
            label={'Pavadinimas'}
            required={true}
            handler={() => {}}
            options={partNames}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Categories;
