import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Landing from './components/Landing/index.js';
import SearchPage from './components/Search/SearchPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing}></IndexRoute>
    <Route path="/search" component={SearchPage}></Route>
  </Route>
);
