import {
  getFromLocalStorage,
  getIsAdminFromStorage,
  StorageKey,
} from '../../services/StorageService';
import { UserActionTypes, UserActions } from './../actions/UserActions';
import { UserState } from './../types/types';

const initialState: UserState = {
  username: '',
  token: getFromLocalStorage(StorageKey.Token),
  errorMsg: '',
  isAdmin: getIsAdminFromStorage(),
};

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
      return {
        ...state,
        token: '',
        username: '',
        isAdmin: false,
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
