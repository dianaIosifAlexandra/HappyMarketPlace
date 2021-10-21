import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Products from '../../pages/Products/Products';

const routes = {
  products: '/',
  login: '/login',
};

const ReactRouter: FC = () => {
  return (
    <Switch>
      <Route exact path={routes.products}>
        <Products />
      </Route>
      <Route exact path={routes.login}>
        <Login />
      </Route>
    </Switch>
  );
};

export default ReactRouter;
