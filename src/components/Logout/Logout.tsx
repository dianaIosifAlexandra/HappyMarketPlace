import React, { Dispatch, FC, useCallback } from 'react';
import { useAppDispatch } from '../../hooks/actionDispatcher';
import { useAppSelector } from '../../hooks/appSelector';
import { selectIsLoggedIn } from '../../store/selectors/UserSelector';

import Button from '@mui/material/Button';
import { Redirect } from 'react-router';
import { Routes } from '../../helpers/Routes';
import { logoutThunk } from '../../store/thunks/UserThunk';

const Logout: FC = () => {
  const dispatch: Dispatch<any> = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logoutThunk());
  }, []);

  return (
    <div>
      <Button
        color="secondary"
        variant="contained"
        onClick={handleLogout}
        size="small"
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
