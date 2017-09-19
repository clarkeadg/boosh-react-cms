
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Page from './Containers/Page'

export default () => {
  const routes = (
    <Route path="/">
      <IndexRoute component={Page} />
      <Route path="/pages/*" component={Page} />
    </Route>
  );
  return routes;
};
