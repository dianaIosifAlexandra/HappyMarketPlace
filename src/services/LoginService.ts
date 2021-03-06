import { httpPost } from './httpService';

interface LoginSuccessResponse {
  token: string;
}

interface LoginErrorResponse {
  msg: string;
  status: string;
}

interface LoginCredentials {
  username: string;
  password: string;
}

type LoginResponse = Promise<
  | LoginSuccessResponse
  | LoginErrorResponse
  | {
      error: string;
    }
>;

export const login = (username: string, password: string): LoginResponse => {
  return httpPost<LoginSuccessResponse | LoginErrorResponse, LoginCredentials>(
    '/auth/login',
    {
      username,
      password,
    }
  );
};
