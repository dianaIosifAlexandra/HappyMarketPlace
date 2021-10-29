import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import ProductReducer from './ProductReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
  cart: CartReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
