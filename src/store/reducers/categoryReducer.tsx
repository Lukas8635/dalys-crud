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
}

const initialState: InitialState = {
  categories: [],
};

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORIES_START:
      return state;
    case ActionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};
