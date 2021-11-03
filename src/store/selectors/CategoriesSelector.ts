import { AppState } from '../types/types';

export const selectCategories = (state: AppState): string[] => {
  return state.categories.categories;
};
