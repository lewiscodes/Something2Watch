import React from 'react';
import {StyleRoot} from 'radium';
import { Route, IndexRoute } from 'react-router';

import App from './app'
import homepage from './pages/homepage'
import findShow from './pages/findShow'
import results from './pages/results'

export default (
    <Route path="/" component={App} >
      <IndexRoute component={homepage} />
      <Route path='/search' component={findShow} />
      <Route path='/results' component={results} />
    </Route>
);