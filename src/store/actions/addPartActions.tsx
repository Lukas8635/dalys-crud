import { Action } from 'redux';
import { ActionTypes } from './actionTypes';

export interface SetValueAction extends Action<typeof ActionTypes.SET_VALUE> {
  payload: { key: string; value: string };
}

export interface SetCarDetailsAction
  extends Action<typeof ActionTypes.SET_CAR_DETAILS> {
  payload: { key: string; value: string };
}

export interface SetDimensionAction
  extends Action<typeof ActionTypes.SET_DIMENSIONS> {
  payload: { key: string; value: string };
}

export interface SetPartCodesAction
  extends Action<typeof ActionTypes.SET_PART_CODES> {
  payload: [];
}

export const addValue = ({
  key,
  value,
}: {
  key: string;
  value: string;
}): SetValueAction => ({
  type: ActionTypes.SET_VALUE,
  payload: { key, value },
});

export const addDimensions = ({
  key,
  value,
}: {
  key: string;
  value: string;
}): SetDimensionAction => ({
  type: ActionTypes.SET_DIMENSIONS,
  payload: { key, value },
});

export const addCarDetails = ({
  key,
  value,
}: {
  key: string;
  value: string;
}): SetCarDetailsAction => ({
  type: ActionTypes.SET_CAR_DETAILS,
  payload: { key, value },
});

// export const setPartCodes = (value: []): SetPartCodesAction => ({
//   type: ActionTypes.SET_PART_CODES,
//   payload: value,
// });

export const setPartCodesAction = (value: []): SetPartCodesAction => {
  return {
    type: ActionTypes.SET_PART_CODES,
    payload: value,
  };
};
