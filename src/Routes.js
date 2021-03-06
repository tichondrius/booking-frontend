import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './modules/core/components'
import { LoginPage } from './modules/login/containers';
import { HomePage } from './modules/home/containers';
import { SignUpPage } from './modules/signUp/containers';
import { UserPage } from './modules/userPage/containers';

import { RoomDetailPage } from './modules/roomdetail/containers';
import { MapsPage } from './modules/map/containers'
import { SearchPage  } from './modules/search/containers';
import { NewPostPage  } from './modules/userPage/containers';
import { UserPostListPage  } from './modules/userPage/containers';
import { UserBookingListPage  } from './modules/userPage/containers';
import { AdminPage  } from './modules/adminPages/containers/AdminPage';


import configureStore from './redux/configureStore'

import LoginRequired from './utils/LoginRequired';
import RouteMiddleware from './utils/RouteMiddleware';
import Route from './utils/Route';


import history from './history';
export const ROUTE_PATH = {
  ROOT: '/',
  SEARCH: '/search', 
  HOME: '/home',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PAGE1: '/page1',
  PAGE2: '/page2',
  MAPS: '/maps',
  ROOMDETAILS: '/room/:id',
  USERPAGE: '/user/edit',
  NEWPOST: '/user/post/new',
  POSTLIST: '/user/posts',
  USERSPOSTLIST: '/posts/:id/users',
  
  ADMINPAGE: '/admin/edit',
  
  
}
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
      <Provider store={configureStore()}  history={history}>
        <Router>
          <RouteMiddleware>
            <App>
              <Switch>
                <Route path={ROUTE_PATH.HOME} component={HomePage} />
                <Route path={ROUTE_PATH.SEARCH} component={SearchPage} />
                <Route path={ROUTE_PATH.LOGIN} component={LoginPage} />
                <Route path={ROUTE_PATH.SIGNUP} component={SignUpPage} />
                <Route path={ROUTE_PATH.MAPS} component={MapsPage} />
                <Route path={ROUTE_PATH.PAGE1} component={FakePage1} />
                <Route path={ROUTE_PATH.ROOMDETAILS} component={RoomDetailPage} />
                <LoginRequired path={ROUTE_PATH.USERPAGE} exact component={UserPage} />
                <LoginRequired path={ROUTE_PATH.NEWPOST} exact component={NewPostPage} />
                <LoginRequired path={ROUTE_PATH.POSTLIST} exact component={UserPostListPage} />
                <LoginRequired path={ROUTE_PATH.USERSPOSTLIST} exact component={UserBookingListPage} />
                <LoginRequired path={ROUTE_PATH.AdminPAGE} exact component={AdminPage} />
                
                
                <LoginRequired path={ROUTE_PATH.PAGE2} exact component={FakePage2} />
                <Redirect from={ROUTE_PATH.ROOT} to={ROUTE_PATH.HOME} />
              </Switch>
            </App>
          </RouteMiddleware>
        </Router>
      </Provider>
    );
  }
}

