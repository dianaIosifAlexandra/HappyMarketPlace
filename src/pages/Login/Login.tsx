import React, { FC, useCallback, useState } from 'react';

import Layout from '../../components/Layout/Layout';
import style from './Login.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Paper from '@mui/material/Paper';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handleChangePassword = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const login = useCallback(() => {
    console.log('login');
  }, []);

  return (
    <Layout>
      <div className={style.loginContainer}>
        <div className={style.title}>Login</div>
        <form className={style.formContainer} onSubmit={login}>
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            className={style.usernameField}
            required
            value={username}
            onChange={handleChangeUsername}
            fullWidth
            type="email"
          />
          <TextField
            id="pass"
            label="Password"
            variant="standard"
            className={style.passwordField}
            required
            value={password}
            onChange={handleChangePassword}
            fullWidth
            type="password"
          />

          <div>
            <Paper elevation={3} className={style.normalUserContainer}>
              <div>Username: johnd</div>
              <div>Password: m38rmF$</div>
            </Paper>
            <Paper elevation={3} className={style.normalUserContainer}>
              <strong>ADMIN</strong>
              <div>Username: mor_2314</div>
              <div>Password: 83r5^_</div>
            </Paper>
          </div>
          <Button
            variant="contained"
            className={style.loginBtn}
            endIcon={<LoginIcon />}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
