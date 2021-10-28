import React, { Dispatch, FC, useCallback, useState } from 'react';
import { useAppSelector } from '../../hooks/appSelector';
import { selectIsLoggedIn } from '../../store/selectors/UserSelector';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import Popover from '@mui/material/Popover';

import style from './Profile.module.scss';
import { loginUserSucces } from '../../store/actions/UserActions';
import { useAppDispatch } from '../../hooks/actionDispatcher';

interface Props {
  username: string;
}

const Profile: FC<Props> = ({ username }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch: Dispatch<any> = useAppDispatch();

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
    localStorage.setItem('isAdmin', '');

    const token = '';
    const name = '';

    dispatch(loginUserSucces(token, name));
  }, [isLoggedIn]);

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
