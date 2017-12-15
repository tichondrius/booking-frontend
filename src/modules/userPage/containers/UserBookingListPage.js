import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';

import { MenuPanel,NewPost,UserWaitingList } from '../components';
import { LoadingComponent } from '../../core/components';
import { ContainerWrapperStyled, ButtonStyled, CardStyled } from '../../core/stylesheets/core.styles';
import { Row, Column } from '../../core/stylesheets/column-row.styles';
import { fetchingUserBookPost,updateStatusPost } from "../../../redux/modules/postsReducer";
import { Container,PostCard} from '../stylesheets/UserInfo.style';
import  Snackbar  from 'material-ui/Snackbar';




export class UserBookingListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postID: 1,
      isDone: false,
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }
  componentDidMount() {

    this.setState({postID: this.props.match.params.id})
    this.props.fetchingUserBookPost(21,this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps){
    const { isDone} = nextProps;
    if(isDone){
      this.setState({isDone});
    }
  }
  handleRequestClose(){
    this.state = {
      isDone: false,
    };
    this.redirectPath('/user/posts')
    
  }
  redirectPath() {
    //this.props.fetchingPosts();
  }
  redirectPath  = (path) => {
    this.props.history.push(path);
  }

  confirmUser(){
    const{postID} = this.state;
    this.props.updateStatusPost(postID,1);

  }
  render() {
    const { posts,username,isFetching,users,statusErrors} = this.props;
    
    const{postID,isDone} = this.state;


    const message =   Array.isArray(statusErrors) && statusErrors.length > 0? "Có lỗi xảy ra": "Duyệt thành công";

    
    return (
      <DocumentTitle title="Booking App - Information">
        <ContainerWrapperStyled>

          <Row>
            <Column md="3" sm="3">
              <MenuPanel redirect={(path)=>this.redirectPath(path)} username={username}/>
            </Column>
            <Column md="9" sm="9">
              <Container>
              {
               ( users.length < 1 && !isFetching)?'Danh sách rỗng':
                users.map(user => <UserWaitingList key={user.id} user={user} confirmClick = {()=> this.confirmUser()}/>)
              }

              {
                isFetching && <LoadingComponent />
              }
 
              <Snackbar
                bodyStyle={{backgroundColor:'#4CAF50'}}
                open={isDone}
                message= {message}
                autoHideDuration={1000}
                onRequestClose={this.handleRequestClose}
              /> 
              </Container>

            </Column>
          </Row>
        </ContainerWrapperStyled>
      </DocumentTitle>
    );
  }
}


// export const mapDispatchToProps = dispatch => ({
//   fetchingUser: () => dispatch(fetchingUser()),
// })

// export default connect(mapStateToProps)(UserPostListPage);

export const mapStateToProps = state => {
  console.log(state);
  const { username} = state.auth;
  const{ isFetching,users,errors} = state.post.users;
  const{ isDone} = state.post.status;
  
  return {
    isFetching,
    users,
    errors,
    username,
    isDone,
    statusErrors: state.post.status.errors,
  };
}


export const mapDispatchToProps = dispatch => ({
  fetchingUserBookPost: (userId,postID) => dispatch(fetchingUserBookPost(userId,postID)),
  updateStatusPost:(postId,status) => dispatch(updateStatusPost(postId,status)),
});


export default connect(mapStateToProps, mapDispatchToProps)(UserBookingListPage);
