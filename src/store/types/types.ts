import { UserActions } from './../actions/UserActions';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import ProductModel from '../../models/Product';
import { ProductListActions } from '../actions/ProductListAction';
import { RootState } from '../store';
import CartProduct from '../../models/CartProduct';
import { CartActions } from '../actions/CartActions';

export interface ProductListState {
  productList: ProductModel[];
  isLoading: boolean;
  error: null | string;
}

export interface UserState {
  username: string;
  token: string | null;
  errorMsg: string;
  isAdmin: boolean;
}

export interface CartState {
  addedProducts: CartProduct[];
  total: number;
}

export interface AppState {
  product: ProductListState;
  user: UserState;
  cart: CartState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type AppActions = ProductListActions | UserActions | CartActions;
