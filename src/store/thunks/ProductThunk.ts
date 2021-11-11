import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import CategoryService from '../../services/CategoryService';
import ProductService from '../../services/ProductService';
import {
  getProductListFailure,
  getProductListRequest,
  getProductListSuccess,
} from '../actions/ProductListAction';
import {
  getProductsInCategoryFailure,
  getProductsInCategoryRequest,
  getProductsInCategorySuccess,
} from '../actions/ProductsInCategoryAction';
import { AppThunk } from '../types/types';

export const getProductListThunk =
  (): AppThunk => (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    dispatch(getProductListRequest());

    const productsNumber = localStorage.getItem('productsNumber')
      ? localStorage.getItem('productsNumber')
      : '10';

    if (productsNumber) {
      ProductService.getProducts(productsNumber)
        .then((response) => {
          dispatch(getProductListSuccess({ productList: response.data }));
        })
        .catch((error) => {
          dispatch(getProductListFailure({ error }));
        });
    }
  };

export const getProductsInCategoryThunk =
  (category: string): AppThunk =>
  (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    dispatch(getProductsInCategoryRequest());

    CategoryService.getProductsByCategory(category)
      .then((response) => {
        console.log(response.data);
        dispatch(getProductsInCategorySuccess(response.data));
      })
      .catch((error) => {
        dispatch(getProductsInCategoryFailure(error));
      });
  };
