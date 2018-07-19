import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import {StyleRoot} from 'radium';

import homepage from './pages/homepage'
import findShow from './pages/findShow'
import results from './pages/results'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
  applyMiddleware(promise, thunk)
));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router>
      <StyleRoot>
        <Switch>
          <Route exact path='/' component={homepage} />
          <Route path='/search' component={findShow} />
          <Route path='/results' component={results} />
        </Switch>
      </StyleRoot>
    </Router>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();