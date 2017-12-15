import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';

import { fetchingUser } from '../../../redux/modules/userReducer'
import { InforUser,MenuPanel,NewPost } from '../components';
import { LoadingComponent } from '../../core/components';
import { ContainerWrapperStyled, ButtonStyled, CardStyled } from '../../core/stylesheets/core.styles';
import { Row, Column } from '../../core/stylesheets/column-row.styles'; 




export class NewPostPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  redirectPath  = (path) => {
    this.props.history.push(path);
  }
  render() {
    const { username } = this.props;
    return (
      <DocumentTitle title="Booking App - New">
        <ContainerWrapperStyled>
          
          <Row>
            <Column md="3" sm="3">
              <MenuPanel  redirect={(path)=>this.redirectPath(path)} username={username}/>
            </Column>
            <Column md="9" sm="9">
              <NewPost username={username}/>
            </Column>
          </Row>
        </ContainerWrapperStyled>
      </DocumentTitle>
    );
  }
}

export const mapStateToProps = state => {
  const { username} = state.auth;
  console.log(username);
  
  return {
    username

  };
}

// export const mapDispatchToProps = dispatch => ({
//   fetchingUser: () => dispatch(fetchingUser()), 
// }) 

export default connect(mapStateToProps)(NewPostPage);