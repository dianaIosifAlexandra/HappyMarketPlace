import CartProduct from '../../models/CartProduct';
import { AppState } from '../types/types';

export const selectAddedProducts = (state: AppState): CartProduct[] => {
  return state.cart.addedProducts;
};

export const selectTotal = (state: AppState): number => {
  return state.cart.total;
};
