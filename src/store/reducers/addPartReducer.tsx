import { ActionTypes } from '../actions/actionTypes';
import { Action } from 'redux';

export interface SetValueAction extends Action<typeof ActionTypes.SET_VALUE> {
  payload: { key: string; value: string };
}

export interface SetDimensionAction
  extends Action<typeof ActionTypes.SET_DIMENSIONS> {
  payload: { key: string; value: string };
}

const initialState = {
  data: {
    partName: '',
    codes: [],
    car: {
      make: '',
      model: '',
      engine: '',
      engineCapacity: '',
      enginePower: {
        kWh: '',
        hp: '',
      },
      fuel: '',
      carProductionYear: '',
      steeringWheelPosition: '',
      transmission: '',
      bodyTape: '',
      drivingWheels: '',
      carColor: '',
    },
    name: '',
    position: '',
    description: '',
    price: '',
    photoUrls: [],
    condition: '',
    status: '',
    odometer: '',
    dimensions: {
      width: '',
      length: '',
      height: '',
    },
    weight: '',
  },
};

export default (
  state = initialState,
  { type, payload }: SetValueAction | SetDimensionAction
) => {
  switch (type) {
    case ActionTypes.SET_VALUE:
      return {
        ...state,
        data: {
          ...state.data,
          [payload.key]: payload.value,
        },
      };
    case ActionTypes.SET_DIMENSIONS:
      return {
        ...state,
        data: {
          ...state.data,
          dimensions: {
            ...state.data.dimensions,
            [payload.key]: payload.value,
          },
        },
      };

    default:
      return state;
  }
};
