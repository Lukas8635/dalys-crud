import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../../Search/Search.comp';
import SelectComp from '../SelectComp/SelectComp';
import SelectCat from '../../SelectCat/SelectCat.comp';
import Spinner from '../../Spinner/Spinner.comp';

import { fetchCat } from '../../../store/actions/categoryActions';
import { StoreState } from '../../../store/store';

import classes from './Categories.module.scss';

import { DataModal, mockState } from '../../../store/categories';

const Categories = () => {
  const categories = useSelector(
    (state: StoreState) => state.categories.categories
  );

  const dispatch = useDispatch();

  // TODO: Only needed to prevent app from breaking. REMOVE when redux is fully implemented
  const [, setSearchQuery] = useState('');

  // Selected Category
  const [, setSelectedCat] = useState('');
  // subCategories - Options for SubCatagories. Added when user select Category
  const [subCategories] = useState<DataModal[] | never[]>([]);
  // Selected SubCategory
  const [, setSlctSubCateg] = useState('');
  // Part Names Options - Options for partName. Added when user selects SubCategory
  const [partNamesOptions] = useState<DataModal[] | never[]>([]);
  const [, setSelectedPart] = useState('');

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
            required={true}
            handler={() => {}}
            options={categories}
          />
          {/* <SelectComp
            required={true}
            options={mockState}
            label={'Kategorija *'}
            handler={setSelectedCat}
          />
          <SelectComp
            required={true}
            options={subCategories}
            label={'Subkategorija *'}
            handler={setSlctSubCateg}
          />
          <SelectComp
            required={true}
            options={partNamesOptions}
            label={'Pavadinimas *'}
            handler={setSelectedPart}
          /> */}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Categories;
