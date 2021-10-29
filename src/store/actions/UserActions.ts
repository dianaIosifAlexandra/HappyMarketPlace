export enum UserActionTypes {
  LoginUserSucces = 'USER--LOGIN-USER-SUCCESS',
  LoginUserFailure = 'USER--LOGIN-USER-FAILURE',
  LogoutUser = 'USER--LOGOUT-USER',
}

interface LoginUserSucces {
  type: typeof UserActionTypes.LoginUserSucces;
  payload: {
    token: string;
    username: string;
    isAdmin: boolean;
  };
}

interface LoginUserFailure {
  type: typeof UserActionTypes.LoginUserFailure;
  payload: {
    msg: string;
  };
}

interface LogoutUser {
  type: typeof UserActionTypes.LogoutUser;
  payload: {
    token: string;
    username: string;
    isAdmin: boolean;
  };
}

export const loginUserSucces = (
  token: string,
  username: string,
  isAdmin: boolean
): LoginUserSucces => ({
  type: UserActionTypes.LoginUserSucces,
  payload: {
    token: token,
    username: username,
    isAdmin: isAdmin,
  },
});

export const loginUserFailure = (msg: string): LoginUserFailure => ({
  type: UserActionTypes.LoginUserFailure,
  payload: {
    msg: msg,
  },
});

export const logoutUser = (
  token: string,
  username: string,
  isAdmin: boolean
): LogoutUser => ({
  type: UserActionTypes.LogoutUser,
  payload: {
    token: token,
    username: username,
    isAdmin: isAdmin,
  },
});

export type UserActions = LoginUserSucces | LoginUserFailure | LogoutUser;
