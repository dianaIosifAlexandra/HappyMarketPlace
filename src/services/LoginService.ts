import { httpService } from '../api/apiServices';

const login = (username: string, password: string) => {
  return httpService.login(username, password);
};

const Login = {
  login,
};

export default Login;
