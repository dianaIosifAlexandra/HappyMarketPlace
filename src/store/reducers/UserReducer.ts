import { LoginActionTypes, LoginUserActions } from './../actions/UserActions';
import { UserState } from './../types/types';

const initialState: UserState = {
  username: '',
  password: '',
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  errorMsg: '',
  isAdmin: false,
};

const UserReducer = (state = initialState, action: LoginUserActions) => {
  switch (action.type) {
    case LoginActionTypes.LoginUserSucces: {
      const { token, username } = action.payload;

      const isUserAdmin = (adminUsername: string) => {
        if (adminUsername === 'mor_2314') {
          return true;
        }

        return false;
      };

      return {
        ...state,
        token: token,
        username: username,
        isAdmin: isUserAdmin(username),
      };
    }

    case LoginActionTypes.LoginUserFailure: {
      return {
        ...state,
        loginError: action.payload.msg,
        isAdmin: false,
      };
    }

    case LoginActionTypes.LoginUserServerFailure: {
      return {
        ...state,
        serverError: action.payload.serverError,
        isAdmin: false,
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
