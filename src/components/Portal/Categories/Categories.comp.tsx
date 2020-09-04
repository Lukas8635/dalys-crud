import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../../Search/Search.comp';
import SelectComp from '../SelectComp/SelectComp';

import { fetchCat } from '../../../store/actions/categoryActions';
import { StoreState } from '../../../store/store';

import classes from './Categories.module.scss';

import { DataModal, mockState} from '../../../store/categories'

const Categories = () => {
  const state = useSelector((state: StoreState) => state);

  console.log(state.categories);

  const dispatch = useDispatch();

  // TODO: Only needed to prevent app from breaking. REMOVE when redux is fully implemented
  const [searchQuery, setSearchQuery] = useState('');

  // Selected Category
  const [selectedCat, setSelectedCat] = useState('');
  // subCategories - Options for SubCatagories. Added when user select Category
  const [subCategories, setSubCategories] = useState<DataModal[] | never[]>([]);
  // Selected SubCategory
  const [slctSubCateg, setSlctSubCateg] = useState('');
  // Part Names Options - Options for partName. Added when user selects SubCategory
  const [partNamesOptions, setPartNamesOptions] = useState<
    DataModal[] | never[]
  >([]);
  const [selectedPartName, setSelectedPart] = useState('');

  /**
   *  Gets all Categories, subCategories ant Part names from DB
   */
  useEffect(() => {
    dispatch(fetchCat());
  }, []);

  return (
    <>
      <Search
        label={'Detalės pavadinimo paieška'}
        setSearchQuery={setSearchQuery}
      />
      <SelectComp
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
      />
    </>
  );
};

export default Categories;
