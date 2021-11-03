import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import ProductReducer from './ProductReducer';
import UserReducer from './UserReducer';
import CategoryReducer from './CategoryReducer';

const rootReducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
  cart: CartReducer,
  category: CategoryReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
