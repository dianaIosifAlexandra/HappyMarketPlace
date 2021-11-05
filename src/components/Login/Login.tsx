import React, { FC, useCallback } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

import style from './Login.module.scss';
import { Routes } from '../../Routes';

const Login: FC = () => {
  const history = useHistory();

  const handleLogin = useCallback(() => {
    history.push(Routes.login);
  }, []);

  return (
    <Button
      color="secondary"
      variant="contained"
      size="small"
      onClick={handleLogin}
    >
      Login
    </Button>
  );
};

export default Login;
