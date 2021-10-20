import { AppState, ProductListState } from '../types/types';

export const selectProduct = (state: AppState): ProductListState => {
  return state.product;
};
