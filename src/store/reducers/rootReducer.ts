import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
