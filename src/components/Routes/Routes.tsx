import React, { FC } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Admin from '../../pages/Admin/Admin';
import { Routes } from '../../helpers/Routes';
import Login from '../../pages/Login/Login';
import Products from '../../pages/Products/Products';
import Cart from '../../pages/Cart/Cart';
import { useAppSelector } from '../../hooks/appSelector';
import { selectIsLoggedIn } from '../../store/selectors/UserSelector';
import Categories from '../../pages/Categories/Categories';

const ReactRouter: FC = () => {
  const location = useLocation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (
    (location.pathname === Routes.cart || location.pathname === Routes.admin) &&
    !isLoggedIn
  ) {
    return <Redirect to={Routes.products} />;
  }

  return (
    <Switch>
      <Route exact path={Routes.products}>
        <Products />
      </Route>
      <Route exact path={Routes.login}>
        <Login />
      </Route>
      <Route exact path={Routes.admin}>
        <Admin />
      </Route>
      <Route exact path={Routes.cart}>
        <Cart />
      </Route>
      <Route exact path={Routes.categories}>
        <Categories />
      </Route>
    </Switch>
  );
};

export default ReactRouter;
