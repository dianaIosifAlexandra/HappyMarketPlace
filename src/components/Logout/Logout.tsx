import React, { Dispatch, FC, useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/actionDispatcher';
import { useAppSelector } from '../../hooks/appSelector';
import { loginUserSucces } from '../../store/actions/UserActions';
import { selectIsLoggedIn } from '../../store/selectors/UserSelector';

import Button from '@mui/material/Button';
import { Redirect } from 'react-router';
import { Routes } from '../../helpers/Routes';

const Logout: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch: Dispatch<any> = useAppDispatch();

  const handleLogout = useCallback(() => {
    localStorage.setItem('token', '');
    localStorage.setItem('isAdmin', '');

    const token = '';
    const name = '';

    dispatch(loginUserSucces(token, name));
  }, [isLoggedIn]);

  useEffect(() => {
    <Redirect to={Routes.products} />;
  }, [isLoggedIn]);

  return (
    <Button
      color="secondary"
      variant="contained"
      onClick={handleLogout}
      size="small"
    >
      Logout
    </Button>
  );
};

export default Logout;
