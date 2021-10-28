import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import style from './Drawer.module.scss';
import { Link } from 'react-router-dom';
import { Routes } from '../../helpers/Routes';
import { useAppSelector } from '../../hooks/appSelector';
import {
  selectisAdmin,
  selectIsLoggedIn,
} from '../../store/selectors/UserSelector';

const CustomDrawer: FC = () => {
  const isAdmin = useAppSelector(selectisAdmin);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <div>
      <List>
        <ListItem button>
          <Link to={Routes.products} className={style.linkPage}>
            Products
          </Link>
        </ListItem>
        {isLoggedIn ? (
          <div>
            <ListItem button>
              <Link to={Routes.cart} className={style.linkPage}>
                Cart
              </Link>
            </ListItem>
            {/* <ListItem button>
              <Link to={Routes.logout} className={style.linkPage}>
                Logout
              </Link>
            </ListItem> */}
          </div>
        ) : (
          <ListItem button>
            <Link to={Routes.login} className={style.linkPage}>
              Login
            </Link>
          </ListItem>
        )}

        {isAdmin ? (
          <div>
            <ListItem button>
              <Link to={Routes.admin} className={style.linkPage}>
                Admin
              </Link>
            </ListItem>
          </div>
        ) : (
          <div></div>
        )}
      </List>
    </div>
  );
};

export default CustomDrawer;
