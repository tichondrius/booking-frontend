import React from 'react';
import Paper from 'material-ui/Paper';
import DocumentTitle from 'react-document-title';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { ContentBlockAllStyled, TextFieldStyled, ButtonStyled, LoadingProgressStyled, ErrorPanelStyled } from '../../core/stylesheets/core.styles'
import { PaperStyled,Container,PostCard} from '../stylesheets/UserInfo.style'
import { ROUTE_PATH } from '../../../Routes';
import { LoadingComponent } from "../../core/components/";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const UserWaitingList = (props) => {
  const {user,confirmClick} = props;

  
  return (
    <PostCard  >
          <CardHeader
             avatar= {user.avatar}
            title= {user.username}
            subtitle={user.phone}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Xem chi tiết" />
            <FlatButton label="Duyệt" onClick={()=> confirmClick()}  />
          </CardActions>
          <CardText expandable={true}>
                <h3>Tên </h3>  {user.first_name}<br/>
                <h3>Email: </h3>   {user.email}<br/>
                  
          </CardText>
        </PostCard>
  );
};

const styles={
  isConfirm:{
    backgroundColor:'#E3F2FD'

  },
  isConfirming:{
    backgroundColor:'#FFEBEE'
  }
}
export default UserWaitingList;
