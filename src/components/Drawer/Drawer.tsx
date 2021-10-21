import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import style from './Drawer.module.scss';
import { Link } from 'react-router-dom';

const routes = {
  products: '/',
  login: '/login',
};

const CustomDrawer: FC = () => {
  return (
    <div>
      <List>
        <ListItem button>
          <Link to={routes.products} className={style.linkPage}>
            Products
          </Link>
        </ListItem>
        <ListItem button>
          <Link to={routes.login} className={style.linkPage}>
            Login
          </Link>
        </ListItem>
      </List>
    </div>
  );
};

export default CustomDrawer;
