import { ActionTypes } from '../actions/actionTypes';

import {
  SetValueAction,
  SetCarDetailsAction,
  SetDimensionAction,
  SetPartCodesAction,
} from '../actions/addPartActions';

type Actions =
  | SetValueAction
  | SetDimensionAction
  | SetCarDetailsAction
  | SetPartCodesAction;

  // TODO: All this interfaces, do it really needed?
interface Car {
  make: string;
  model: string;
  engine: string;
  engineCapacity: string;
  enginePower: {
    kWh: string;
    hp: string;
  };
  fuel: string;
  carProductionYear: string;
  steeringWheelPosition: string;
  transmission: string;
  bodyTape: string;
  drivingWheels: string;
  carColor: string;
}

interface Data {
  partName: string;
  codes: [];
  car: Car;
  name: string;
  position: string;
  description: string;
  price: string;
  photoUrls: [];
  condition: string;
  status: string;
  odometer: string;
  dimensions: {
    width: string;
    length: string;
    height: string;
  };
  weight: string;
}

interface InitialState {
  data: Data
}

const initialState: InitialState = {
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

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SET_VALUE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.key]: action.payload.value,
        },
      };
    case ActionTypes.SET_DIMENSIONS:
      return {
        ...state,
        data: {
          ...state.data,
          dimensions: {
            ...state.data.dimensions,
            [action.payload.key]: action.payload.value,
          },
        },
      };
    case ActionTypes.SET_CAR_DETAILS:
      return {
        ...state,
        data: {
          ...state.data,
          car: {
            ...state.data.car,
            [action.payload.key]: action.payload.value,
          },
        },
      };
    case ActionTypes.SET_PART_CODES:
      return {
        ...state,
        data: {
          ...state.data,
          codes: action.payload,
        },
      };

    default:
      return state;
  }
};
