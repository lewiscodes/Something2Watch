import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'
import { StyleRoot } from 'radium'
import routes from './routes.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
  applyMiddleware(promise, thunk)
))

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <StyleRoot>
      <Router history={browserHistory} routes={routes} />
    </StyleRoot>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
