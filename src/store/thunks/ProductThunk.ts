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

    const productsNumber = localStorage.getItem('productsNumber')
      ? localStorage.getItem('productsNumber')
      : '10';

    ProductService.getProducts(productsNumber!)
      .then((response) => {
        dispatch(getProductListSuccess({ productList: response.data }));
      })
      .catch((error) => {
        dispatch(getProductListFailure({ error }));
      });
  };
