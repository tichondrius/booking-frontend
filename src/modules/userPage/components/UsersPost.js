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


const UsersPost = (props) => {
  const {post,redirectPath} = props;
  const isCanEdit =  post.duyet_bai== 0? false: true;
  let tinhtrang = post.duyet_bai=== 0? styles.isConfirming: styles.isConfirm;
  const statusString = post.status=== 0? 'Còn trống': 'Đã cho thuê';
  const canView = (post.status === 0 && post.duyet_bai !== 0)? true: false;
  
  return (
    <PostCard containerStyle={tinhtrang} >
          <CardHeader
          
            title= {post.title}
            subtitle={statusString}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Cập nhật" disabled={!isCanEdit} />
            <FlatButton label="Duyệt  người thuê"  disabled={!canView} onClick={()=>{redirectPath(`/posts/${post.id}/users`)}} />
          </CardActions>
          <CardText expandable={true}>
                <h3>Ngày tạo: </h3>  {post.create_at}<br/>
                <h3>Địa chỉ: </h3>   {post.address}<br/>
                <h3>Giá hiện tại: </h3>  {post.price}<br/>
                  
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
export default UsersPost;
