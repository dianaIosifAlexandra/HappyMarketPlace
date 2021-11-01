import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

import CustomDrawer from '../Drawer/Drawer';

import logoImage from '../../assests/happy-emoji-by-google.png';
import style from './Navbar.module.scss';
import Profile from '../../containers/Profile/Profile';

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
      sx={{ width: 180 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CustomDrawer />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={style.navBarContainer}>
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

          <div className={style.logoContainer}>
            <Button color="inherit">
              <Link to="/" className={style.loginBtn}>
                <img src={logoImage} className={style.logoImage} />
              </Link>
            </Button>
          </div>
          <Profile />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
