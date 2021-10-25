import ProductModel from '../../models/Product';
import { AppState } from '../types/types';

export const selectProducts = (state: AppState): ProductModel[] => {
  return state.product.productList;
};
