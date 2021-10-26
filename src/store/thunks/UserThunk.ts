import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { login } from '../../services/LoginService';
import { loginUserFailure, loginUserSucces } from '../actions/UserActions';
import { AppThunk } from '../types/types';

export const loginUserThunk =
  (username: string, password: string): AppThunk =>
  (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    login(username, password).then((response) => {
      if ('token' in response) {
        localStorage.setItem('token', response.token);
        // localStorage.setItem('isAdmin', !!response.token);
        dispatch(loginUserSucces(response.token, username));
      }
      if ('msg' in response) {
        console.log(response);
        dispatch(loginUserFailure(response.msg));
      }
    });
  };
