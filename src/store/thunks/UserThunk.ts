import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { login } from '../../services/LoginService';
import { loginUserFailure, loginUserSucces } from '../actions/UserActions';
import { AppThunk } from '../types/types';

export const loginUserThunk =
  (username: string, password: string): AppThunk =>
  (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => {
    login(username, password).then((response) => {
      console.log('loginResponse: ', response);
      if ('token' in response) {
        console.log(response);
        dispatch(loginUserSucces(response.token));
      }
      if ('msg' in response) {
        console.log(response);
        dispatch(loginUserFailure(response.msg));
      }
    });
  };
