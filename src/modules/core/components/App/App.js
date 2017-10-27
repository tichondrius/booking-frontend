import DocumentTitle from 'react-document-title';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import { Header, Footer } from '../../components';
import { BodyWrapperStyled } from '../../stylesheets/core.styles';

const App = ({ children }) => {
  return (
      <DocumentTitle title="Booking website">
        <MuiThemeProvider>
          <Header />
          <BodyWrapperStyled>
            { children }
          </BodyWrapperStyled>
          <Footer /> 
        </MuiThemeProvider>
      </DocumentTitle>
  );
};

export default App;
