import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Redirect } from 'react-router-dom'
import { authLogin } from '../../../redux/modules/authReducer'

import { ContainerWrapperStyled, TextFieldStyled, ButtonStyled, LoadingProgressStyled } from '../../core/stylesheets/core.styles'
import { ROUTE_PATH } from '../../../Routes';


const HomePage = (props) => {
  return (
    <DocumentTitle title="Booking App - Home page">
      <ContainerWrapperStyled>
       <h2>Home page</h2>
      </ContainerWrapperStyled>    
    </DocumentTitle>
  );
}

export default HomePage;