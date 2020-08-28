import { createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import addPartReducer from './reducers/addPartReducer';

export type StoreState = ReturnType<typeof addPartReducer>

const store = createStore(addPartReducer, composeWithDevTools());

export default store;
