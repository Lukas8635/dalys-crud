import { ActionTypes } from '../actions/actionTypes';

import { Actions } from '../actions/categoryActions';

export interface Category {
  _id: string;
  categoryName: string;
  translations: {
    lt: string;
    en: string;
  };
  iconUrl: string;
  subcategories: SubCategory[];
}

export interface SubCategory {
  _id: string;
  categoryName: string;
  translations: {
    lt: string;
    en: string;
  };
  partNames: PartName[];
}

export interface PartName {
  _id: string;
  partNames: [];
  translations: {
    lt: string;
    en: string;
  };
}

export interface InitialState {
  categories: Category[];
  subcategories: SubCategory[];
  partNames: PartName[];
  selectedCat: string;
  selectedSubCat: string;
  selectedPartName: string;
}

const initialState: InitialState = {
  categories: [],
  subcategories: [],
  partNames: [],
  selectedCat: '',
  selectedSubCat: '',
  selectedPartName: '',
};

// TODO: Added Error case GET_CATEGORIES_FAILURE
export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORIES_START:
      return {
        ...state,
      };
    case ActionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case ActionTypes.SET_SELECTION:
      const setCat = action.payload.selector(state, action.payload.selectorKey);
      const options = setCat.filter(
        (item: Category | SubCategory | PartName) =>
          item._id === action.payload.selection_id
      );
      return { ...state, [action.payload.key]: options[0][action.payload.key] };
    default:
      return state;
  }
};
