import React, { FC, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Products from '../../pages/Products/Products';
import Login from '../../pages/Login/Login';

import logoImage from '../../assests/happy-emoji-by-google.png';
import style from './Navbar.module.scss';

const routes = {
  products: '/',
  login: '/login',
};

type Anchor = 'left';

const Navbar: FC = () => {
  const [position, setPosition] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setPosition({ ...position, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 150 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {(['left'] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <Button
                  onClick={toggleDrawer(anchor, true)}
                  className={style.menuBtn}
                >
                  <MenuIcon />
                </Button>
                <Drawer
                  anchor={anchor}
                  open={position[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className={style.logoContainer}
            >
              <img src={logoImage} className={style.logoImage} />
            </Typography>
            <Button color="inherit">
              <Link to={routes.login} className={style.loginBtn}>
                Login
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Switch>
        <Route exact path={routes.products} component={Products}>
          <Products />
        </Route>
        <Route path={routes.login} component={Login}>
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default Navbar;
