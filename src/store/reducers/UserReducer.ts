import { UserActionTypes, UserActions } from './../actions/UserActions';
import { UserState } from './../types/types';

const initialState: UserState = {
  username: '',
  password: '',
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  errorMsg: '',
  isAdmin: localStorage.getItem('isAdmin')
    ? !!localStorage.getItem('isAdmin')
    : false,
};

//todo: rename userActions
const UserReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case UserActionTypes.LoginUserSucces: {
      const { token, username, isAdmin } = action.payload;

      return {
        ...state,
        token: token,
        username: username,
        isAdmin: isAdmin,
      };
    }

    case UserActionTypes.LoginUserFailure: {
      return {
        ...state,
        loginError: action.payload.msg,
        isAdmin: false,
      };
    }

    case UserActionTypes.LogoutUser: {
      const { token, username, isAdmin } = action.payload;

      return {
        ...state,
        token: token,
        username: username,
        isAdmin: isAdmin,
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
