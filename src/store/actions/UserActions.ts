export enum LoginActionTypes {
  LoginUserSucces = 'USER--LOGIN-USER-SUCCESS',
  LoginUserFailure = 'USER--LOGIN-USER-FAILURE',
  LoginUserServerFailure = 'USER--LOGIN-USER-SERVER-FAILURE',
}

interface LoginUserSucces {
  type: typeof LoginActionTypes.LoginUserSucces;
  payload: {
    token: string;
  };
}

interface LoginUserFailure {
  type: typeof LoginActionTypes.LoginUserFailure;
  payload: {
    msg: string;
  };
}

interface LoginUserServerFailure {
  type: typeof LoginActionTypes.LoginUserServerFailure;
  payload: {
    serverError: string;
  };
}

export const loginUserSucces = (token: string): LoginUserSucces => ({
  type: LoginActionTypes.LoginUserSucces,
  payload: {
    token: token,
  },
});

export const loginUserFailure = (msg: string): LoginUserFailure => ({
  type: LoginActionTypes.LoginUserFailure,
  payload: {
    msg: msg,
  },
});

export const loginUserServerFailure = ({
  serverError,
}: {
  serverError: string;
}): LoginUserServerFailure => ({
  type: LoginActionTypes.LoginUserServerFailure,
  payload: {
    serverError: serverError,
  },
});

export type LoginUserActions =
  | LoginUserSucces
  | LoginUserFailure
  | LoginUserServerFailure;
