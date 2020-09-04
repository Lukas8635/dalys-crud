import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import addPartReducer from './reducers/addPartReducer';
import categoryReducer from './reducers/categoryReducer';

const rootReducer = combineReducers({
  part: addPartReducer,
  categories: categoryReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
