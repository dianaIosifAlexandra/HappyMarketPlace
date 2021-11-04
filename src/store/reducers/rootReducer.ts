import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import ProductReducer from './ProductReducer';
import UserReducer from './UserReducer';
import CategoriesReducer from './CategoriesReducer';
import ProductsInCategoryReducer from './ProductsInCategoryReducer';

const rootReducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
  cart: CartReducer,
  categories: CategoriesReducer,
  productsInCategory: ProductsInCategoryReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
