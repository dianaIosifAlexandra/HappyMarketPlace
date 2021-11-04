import { AppState } from '../types/types';
import ProductModel from '../../models/Product';

export const selectProductsInCategory = (state: AppState): ProductModel[] => {
  return state.productsInCategory.productsInCategory;
};
