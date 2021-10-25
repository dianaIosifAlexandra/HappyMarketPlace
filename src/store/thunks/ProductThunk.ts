import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import ProductService from '../../services/ProductService';
import {
  getProductListFailure,
  getProductListRequest,
  getProductListSuccess,
} from '../actions/ProductListAction';
import { AppThunk } from '../types/types';

export const getProductListThunk =
  (): AppThunk => (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    dispatch(getProductListRequest());

    ProductService.getProducts()
      .then((response) => {
        dispatch(getProductListSuccess({ productList: response.data }));
      })
      .catch((error) => {
        dispatch(getProductListFailure({ error }));
      });
  };
