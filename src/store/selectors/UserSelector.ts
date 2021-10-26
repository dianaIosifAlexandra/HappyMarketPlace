import { AppState } from '../types/types';

export const selectIsLoggedIn = (state: AppState): boolean => {
  return !!state.user.token;
};
