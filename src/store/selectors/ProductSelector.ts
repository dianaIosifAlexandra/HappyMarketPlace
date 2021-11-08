import ProductModel from '../../models/Product';
import { AppState } from '../types/types';

export const selectProducts = (state: AppState): ProductModel[] => {
  return state.product.productList;
};

export const selectProductsInCategory = (state: AppState): ProductModel[] => {
  return state.productsInCategory.productsInCategory;
};

export const selectIsProductsLoading = (state: AppState): boolean => {
  return state.productsInCategory.isLoading;
};
