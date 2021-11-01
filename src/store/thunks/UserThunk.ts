import { logoutUser } from './../actions/UserActions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { login } from '../../services/LoginService';
import { StorageKey, updateLocalStorage } from '../../services/StorageService';
import { loginUserFailure, loginUserSucces } from '../actions/UserActions';
import { AppThunk } from '../types/types';

const adminUser = 'mor_2314';

const isUserAdmin = (adminUsername: string) => {
  if (adminUsername === adminUser) {
    return true;
  }

  return false;
};

export const loginUserThunk =
  (username: string, password: string): AppThunk =>
  (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    login(username, password).then((response) => {
      if ('token' in response) {
        updateLocalStorage(StorageKey.Token, response.token);
        updateLocalStorage(
          StorageKey.IsAdmin,
          JSON.stringify(isUserAdmin(username))
        );

        dispatch(
          loginUserSucces(response.token, username, isUserAdmin(username))
        );
      }
      if ('msg' in response) {
        console.log(response);
        dispatch(loginUserFailure(response.msg));
      }
    });
  };

export const logoutThunk =
  (): AppThunk => (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    updateLocalStorage(StorageKey.Token, '');
    updateLocalStorage(StorageKey.IsAdmin, JSON.stringify(false));

    dispatch(logoutUser());
  };
