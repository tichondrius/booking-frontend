import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './modules/core/components'

import configureStore from './redux/configureStore'

import LoginRequired from './utils/LoginRequired';

export const ROUTE_PATH = {
  HOME: '/home',
  LOGIN: '/login',
  PAGE1: '/page1',
  PAGE2: '/page2',
}

const FakeHome = () => (
  <h2>Home</h2>
);
const FakeLogin = () => (
  <h2>Login</h2>
);
const FakePage1 = () => (
  <h2>Page1 no login required</h2>
);
const FakePage2 = () => (
  <h2>Page 2 login required</h2>
);

export default class Routes extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
            <App>
              <Switch>
                <Route path={ROUTE_PATH.HOME} component={FakeHome} />
                <Route path={ROUTE_PATH.LOGIN} component={FakeLogin} />
                <Route path={ROUTE_PATH.PAGE1} component={FakePage1} />
                <LoginRequired path={ROUTE_PATH.PAGE2} exact component={FakePage2} />
              </Switch>
            </App>
        </Router>
      </Provider>
    );
  }
}

