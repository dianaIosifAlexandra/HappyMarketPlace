import { LoginActionTypes, LoginUserActions } from './../actions/UserActions';
import { UserState } from './../types/types';

const initialState: UserState = {
  username: '',
  password: '',
  token: '',
  errorMsg: '',
  isAdmin: false,
};

const UserReducer = (state = initialState, action: LoginUserActions) => {
  switch (action.type) {
    case LoginActionTypes.LoginUserSucces: {
      //aici sa returnez si username-ul
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        isAdmin: true,
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
