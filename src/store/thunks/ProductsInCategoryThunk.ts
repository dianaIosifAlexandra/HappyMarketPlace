import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import CategoryService from '../../services/CategoryService';
import {
  getProductsInCategoryRequest,
  getProductsInCategorySuccess,
  getProductsInCategoryFailure,
} from '../actions/ProductsInCategoryAction';
import { AppThunk } from '../types/types';

export const getProductsInCategoryThunk =
  (category: string): AppThunk =>
  (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    dispatch(getProductsInCategoryRequest());

    CategoryService.getProductsByCategory(category)
      .then((response) => {
        dispatch(getProductsInCategorySuccess(response.data));
      })
      .catch((error) => {
        dispatch(getProductsInCategoryFailure(error));
      });
  };
