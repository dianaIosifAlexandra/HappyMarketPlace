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

// Selectorii - ii folosesc pentru a consuma date din state
// Thunks - call la backend

// Thunk are un efect - care face dispatch la o actiune care dup-aia face dispatch la un reducer

// folders structure:
// Components = componente de sine statatoare care primesc date prin props
// Containers = componente care folosesc state-ul de Redux
// Pages - componente care au rounting (poate sa foloseasca Redux, dar nu e un must)

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
        dispatch(getProductsInCategorySuccess(response.data));
      })
      .catch((error) => {
        dispatch(getProductsInCategoryFailure(error));
      });
  };
