import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from '../../pages/Admin/Admin';
import { Routes } from '../../helpers/Routes';
import Login from '../../pages/Login/Login';
import Products from '../../pages/Products/Products';
import Cart from '../../pages/Cart/Cart';

const ReactRouter: FC = () => {
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
    </Switch>
  );
};

export default ReactRouter;
