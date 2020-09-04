import { ActionTypes } from '../actions/actionTypes';

import { Actions } from '../actions/categoryActions';

const initialState = {
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
