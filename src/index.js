import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import findShow from './pages/findShow'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
  applyMiddleware(promise, thunk)
));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router>
      <div>
        <Route exact path='/' component={findShow} />
      </div>
    </Router>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();