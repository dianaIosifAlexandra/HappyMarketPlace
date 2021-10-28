import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/appSelector';
import { selectIsLoggedIn } from '../../store/selectors/UserSelector';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';

import style from './Profile.module.scss';
import Logout from '../../components/Logout/Logout';

const Profile: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div className={style.loggedInUserContainer}>
          <PersonIcon />
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
