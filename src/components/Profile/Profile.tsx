import React, { FC, useCallback, useState } from 'react';
import { useAppSelector } from '../../hooks/appSelector';
import { selectIsLoggedIn } from '../../store/selectors/UserSelector';
import { Link, Redirect } from 'react-router-dom';

import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import Popover from '@mui/material/Popover';

import style from './Profile.module.scss';
import { Routes } from '../../helpers/Routes';

interface Props {
  username: string;
}

const Profile: FC<Props> = ({ username }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpenPopover = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleLogout = useCallback(() => {
    localStorage.setItem('token', '');

    //cum faci aici update din nou la state ca sa mi se refesheze pagina?
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div className={style.loggedInUserContainer}>
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleOpenPopover}
          >
            <PersonIcon />
          </Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            className={style.profilePopover}
          >
            <div className={style.name}>{username}</div>
            <div className={style.logoutBtn}>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </Popover>
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
