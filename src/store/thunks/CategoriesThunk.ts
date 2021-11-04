import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import CategoryService from '../../services/CategoryService';
import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesFailure,
} from '../actions/CategoriesAction';
import { AppThunk } from '../types/types';

export const getCategoriesThunk =
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
