import { ActionTypes } from './actionTypes';

export const addValue = ({ key, value }: { key: string; value: string }) => ({
  type: ActionTypes.SET_VALUE,
  payload: { key, value },
});

export const addDimensions = ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => ({
  type: ActionTypes.SET_DIMENSIONS,
  payload: { key, value },
});
