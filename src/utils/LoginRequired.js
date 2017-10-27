import React, { Component } from 'react';
import Router, { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ROUTE_PATH } from '../Routes';

const LoginRequired = ({ component: Component, isPersisted, token, ...props }) => {
  if (isPersisted === true && token) {
    return (
      <Route {...props} render={props => (<Component {...props} />)} />
    );
  } else if (isPersisted === true && !token) {
    return (
      <Redirect to={ROUTE_PATH.LOGIN} />
    );
  }
  return (<div>loading...</div>);
};

function mapStateToProps(state) {
  const { auth } = state;
  return {
    token: auth.token,
    isPersisted: Boolean(auth.isPersisted)
  };
}


// export default LoginRequired;
export default withRouter(connect(mapStateToProps)(LoginRequired));
