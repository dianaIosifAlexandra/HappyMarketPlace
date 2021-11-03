import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/appSelector';
import {
  selectIsLoggedIn,
  selectUsername,
} from '../../store/selectors/UserSelector';
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';

import style from './Profile.module.scss';
import Logout from '../../components/Logout/Logout';
import Login from '../../components/Login/Login';

const Profile: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const username = useAppSelector(selectUsername);

  return (
    <>
      {isLoggedIn ? (
        <div className={style.loggedInUserContainer}>
          <Tooltip title={username}>
            <PersonIcon />
          </Tooltip>
          <div className={style.logoutBtn}>
            <Logout />
          </div>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}

      {/* Todo: un button de login pentru cazul in care user-ul nu este autentificat si scot Login-ul din links pt acesti useri */}
    </>
  );
};
export default Profile;
