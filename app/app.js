//
// Entry file of the app
//

import 'babel-polyfill';

// Load the favicon
import '!file-loader?name=[name].[ext]!./favicon.ico';  // eslint-disable-line import/no-unresolved, import/no-webpack-loader-syntax

import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import makeSelectLocationState from 'containers/App/selectors';
import App from 'components/App';
import createRoutes from './routes';
import configureStore from './store';
import './global-styles';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

// Set up the router, wrapping all Routes in the App component
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
      render={
        applyRouterMiddleware(useScroll())
      }
    />
  </Provider>,
  document.getElementById('app')
);

// Install ServiceWorker and AppCache
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
