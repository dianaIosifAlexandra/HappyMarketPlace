import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import style from './Drawer.module.scss';
import { Link } from 'react-router-dom';
import { Routes } from '../../helpers/Routes';
import { useAppSelector } from '../../hooks/appSelector';
import { selectisAdmin } from '../../store/selectors/UserSelector';

const CustomDrawer: FC = () => {
  const isAdmin = useAppSelector(selectisAdmin);

  return (
    <div>
      <List>
        <ListItem button>
          <Link to={Routes.products} className={style.linkPage}>
            Products
          </Link>
        </ListItem>
        <ListItem button>
          <Link to={Routes.login} className={style.linkPage}>
            Login
          </Link>
        </ListItem>
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
