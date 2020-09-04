import { Action, Store } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from './actionTypes';
import { StoreState } from '../store';

interface FetchCategoriesStart
  extends Action<ActionTypes.GET_CATEGORIES_START> {}
// TODO: Added type to this payload
interface FetchCategoriesSuccess
  extends Action<ActionTypes.GET_CATEGORIES_SUCCESS> {
  payload: [];
}
interface FetchCategoriesFail
  extends Action<ActionTypes.GET_CATEGORIES_FAILURE> {}

interface SetSelection extends Action<ActionTypes.SET_SELECTION> {
  payload: {
    key: string;
    selection: string;
  };
}

export type Actions =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFail
  | SetSelection

/**
 *  Gets Categories, SubCategories and Part Names from DB and saves in to Redux Store
 */
export const fetchCat = (): ThunkAction<
  Promise<void>,
  StoreState,
  undefined,
  Actions
> => async (
  dispatch: ThunkDispatch<StoreState, undefined, Actions>
): Promise<void> => {
  dispatch({ type: ActionTypes.GET_CATEGORIES_START });
  try {
    const response = await fetch('http://localhost:8000/get-cat');
    const data = await response.json();
    dispatch({
      type: ActionTypes.GET_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // TODO: Is this correct?? payload: error
    dispatch({
      type: ActionTypes.GET_CATEGORIES_FAILURE,
      payload: error,
    });
  }
};

export const setSelection = (key: string, selection: string) => ({
  type: ActionTypes.SET_SELECTION,
  payload: {
    key: key,
    selection: selection,
  },
});
