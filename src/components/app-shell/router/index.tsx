import { CircularProgress } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const TopAlbums = lazy(() => import('../../../pages/top-albums'));

const ContentRouter = () => (
  <Suspense fallback={<CircularProgress size={32} />}>
    <Switch>
      <Route path="/" component={TopAlbums} />
    </Switch>
  </Suspense>
);

export default ContentRouter;
