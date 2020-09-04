import { ActionTypes } from '../actions/actionTypes';

import { Actions } from '../actions/categoryActions';

export interface Category {
  categoryName: string;
  translations: {
    lt: string;
    en: string;
  };
  iconUrl: string;
  subcategories: SubCategory[];
}

interface SubCategory {
  categoryName: string;
  translations: {
    lt: string;
    en: string;
  };
  partNames: PartName[];
}

interface PartName {
  partNames: [];
  translations: {
    lt: string;
    en: string;
  };
}

interface InitialState {
  categories: Category[];
  selectedCat: string;
  selectedSubCat: string;
  selectedPartName: string;
}

const initialState: InitialState = {
  categories: [],
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
      return { ...state,
        [action.payload.key]: action.payload.selection
      };
    default:
      return state;
  }
};
