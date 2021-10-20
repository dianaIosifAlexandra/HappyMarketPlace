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

export interface AppState {
  product: ProductListState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type AppActions = ProductListActions;
