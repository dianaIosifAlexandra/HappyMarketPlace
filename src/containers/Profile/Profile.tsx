import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/appSelector';
import {
  selectIsLoggedIn,
  selectUsername,
} from '../../store/selectors/UserSelector';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';

import style from './Profile.module.scss';
import Logout from '../../components/Logout/Logout';

const Profile: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const username = useAppSelector(selectUsername);

  return (
    <div>
      {isLoggedIn ? (
        <div className={style.loggedInUserContainer}>
          <Tooltip title={username} placement="top">
            <PersonIcon />
          </Tooltip>
          <div className={style.logoutBtn}>
            <Logout />
          </div>
        </div>
      ) : (
        <Button color="inherit">
          <Link to="/login" className={style.loginBtn}>
            Login
          </Link>
        </Button>
      )}
    </div>
  );
};
export default Profile;
