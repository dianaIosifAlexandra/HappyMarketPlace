import { LoginUserActions } from './../actions/UserActions';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import ProductModel from '../../models/Product';
import { ProductListActions } from '../actions/ProductListAction';
import { RootState } from '../store';

export interface ProductListState {
  productList: ProductModel[];
  isLoading: boolean;
  error: null | string;
}

export interface UserState {
  username: string;
  password: string;
  token: string;
  errorMsg: string;
  isAdmin: boolean;
}

export interface AppState {
  product: ProductListState;
  user: UserState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type AppActions = ProductListActions | LoginUserActions;
