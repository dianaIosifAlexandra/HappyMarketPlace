import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/appSelector';
import {
  selectisAdmin,
  selectIsLoggedIn,
} from '../../store/selectors/UserSelector';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Routes } from '../../Routes';

interface Props {
  className: string;
}

const NavLinks: FC<Props> = ({ className }) => {
  const isAdmin = useAppSelector(selectisAdmin);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <div>
      <List className={className}>
        <ListItem button>
          <Link to={Routes.products} className={className}>
            Products
          </Link>
        </ListItem>
        <ListItem button>
          <Link to={Routes.mockProducts} className={className}>
            Mock Products
          </Link>
        </ListItem>
        {isLoggedIn && (
          <div className={className}>
            <ListItem button>
              <Link to={Routes.cart} className={className}>
                Cart
              </Link>
            </ListItem>
            <ListItem button>
              <Link to={Routes.categories} className={className}>
                Categories
              </Link>
            </ListItem>
          </div>
        )}

        {isLoggedIn && isAdmin && (
          <div>
            <ListItem button>
              <Link to={Routes.admin} className={className}>
                Admin
              </Link>
            </ListItem>
          </div>
        )}
      </List>
    </div>
  );
};

export default NavLinks;
