import { AppState } from '../types/types';

export const selectIsLoggedIn = (state: AppState): boolean => {
  return !!state.user.token;
};

export const selectUsername = (state: AppState): string => {
  return state.user.username;
};

export const selectisAdmin = (state: AppState): boolean => {
  return state.user.isAdmin;
};
