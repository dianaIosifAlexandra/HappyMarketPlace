import React, { Dispatch, FC, useCallback } from 'react';
import { useAppDispatch } from '../../hooks/actionDispatcher';

import Button from '@mui/material/Button';
import { logoutThunk } from '../../store/thunks/UserThunk';

const Logout: FC = () => {
  const dispatch: Dispatch<any> = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logoutThunk());
  }, []);

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
