import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';

import { fetchingUser } from '../../../redux/modules/userReducer'
import { InforUser } from '../../userPage/components';
import { MenuPanel } from '../components';

import { LoadingComponent } from '../../core/components';
import { ContainerWrapperStyled, ButtonStyled, CardStyled } from '../../core/stylesheets/core.styles';
import { Row, Column } from '../../core/stylesheets/column-row.styles'; 




export class AdminPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  redirectPath  = (path) => {
    this.props.history.push(path);
  }
  render() {
    const { username,userId } = this.props;
    return (
      <DocumentTitle title="Booking App - AdminPage">
        <ContainerWrapperStyled>
          
          <Row>
            <Column md="3" sm="3">
              <MenuPanel redirect={(path)=>this.redirectPath(path)}  userId={userId} username={username}/>
            </Column>
            <Column md="9" sm="9">
              <InforUser username={username} userId={userId} />

    
              
            </Column>
          </Row>
        </ContainerWrapperStyled>
      </DocumentTitle>
    );
  }
}

export const mapStateToProps = state => {
  const { username,userId} = state.auth;
  console.log(username);
  
  return {
    username,userId

  };
}

// export const mapDispatchToProps = dispatch => ({
//   fetchingUser: () => dispatch(fetchingUser()), 
// }) 

export default connect(mapStateToProps)(AdminPage);