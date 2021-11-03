import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import CategoryService from '../../services/categoryService';
import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesFailure,
} from '../actions/CategoryAction';
import { AppThunk } from '../types/types';

export const getCategorieThunk =
  (): AppThunk => (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    dispatch(getCategoriesRequest());

    CategoryService.getCategories()
      .then((response) => {
        dispatch(getCategoriesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getCategoriesFailure(error));
      });
  };
