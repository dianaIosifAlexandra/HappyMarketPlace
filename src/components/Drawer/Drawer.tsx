import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import style from './Drawer.module.scss';
import { Link } from 'react-router-dom';
import { Routes } from '../../helpers/Routes';

const CustomDrawer: FC = () => {
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
      </List>
    </div>
  );
};

export default CustomDrawer;
