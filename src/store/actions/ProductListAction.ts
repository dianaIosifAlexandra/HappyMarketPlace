import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppThunk } from '../types/types';
import ProductModel from '../../models/Product';
import ProductService from '../../services/ProductService';

export enum ProductActionTypes {
  GetProductListRequest = 'PRODUCT-LIST--GET-PRODUCTS-REQUEST',
  GetProductListFailure = 'PRODUCT-LIST--GET-PRODUCTS-FAILURE',
  GetProductListSuccess = 'PRODUCT-LIST--GET-PRODUCTS-SUCCESS',
}

interface GetProductListRequest {
  type: typeof ProductActionTypes.GetProductListRequest;
}

interface GetProductListFailure {
  type: typeof ProductActionTypes.GetProductListFailure;
  payload: {
    error: string;
  };
}

interface GetProductListSuccess {
  type: typeof ProductActionTypes.GetProductListSuccess;
  payload: {
    newProductList: ProductModel[];
  };
}

const getProductListRequest = (): GetProductListRequest => ({
  type: ProductActionTypes.GetProductListRequest,
});

const getProductListFailure = ({
  error,
}: {
  error: string;
}): GetProductListFailure => ({
  type: ProductActionTypes.GetProductListFailure,
  payload: {
    error,
  },
});

const getProductListSuccess = ({
  newProductList,
}: {
  newProductList: ProductModel[];
}): GetProductListSuccess => ({
  type: ProductActionTypes.GetProductListSuccess,
  payload: {
    newProductList,
  },
});

export const getProductListThunk =
  (): AppThunk => (dispatch: ThunkDispatch<never, never, AnyAction>) => {
    dispatch(getProductListRequest());

    ProductService.getProducts()
      .then((response) => {
        dispatch(getProductListSuccess({ newProductList: response.data }));
      })
      .catch((error) => {
        dispatch(getProductListFailure({ error }));
      });
  };

export type ProductListActions =
  | GetProductListRequest
  | GetProductListFailure
  | GetProductListSuccess;
