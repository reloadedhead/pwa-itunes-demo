import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppShell from './components/app-shell';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={['/']} component={AppShell} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
