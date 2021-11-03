import React, { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';

import logoImage from '../../assests/happy-emoji-by-google.png';
import style from './Navbar.module.scss';
import Profile from '../../containers/Profile/Profile';
import NavLinks from '../NavLinks/NavLink';

const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={style.navBarContainer}>
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
              <Box
                sx={{ width: 180 }}
                role="presentation"
                onClick={handleDrawerToggle}
              >
                <NavLinks className={style.linkPage} />
              </Box>
            </Drawer>
          </Hidden>
          <div className={style.logoContainer}>
            <Button color="inherit">
              <Link to="/" className={style.loginBtn}>
                <img src={logoImage} className={style.logoImage} />
              </Link>
            </Button>
          </div>
          <Box className={style.userContainer}>
            <Hidden smDown>
              <NavLinks
                className={`${style.linkPage} ${style.linksContainer}`}
              />
            </Hidden>
            <Profile />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
