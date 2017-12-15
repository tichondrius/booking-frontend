import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';

import { fetchingUser } from '../../../redux/modules/userReducer'
import { InforUser,MenuPanel,NewPost,UsersPost } from '../components';
import { LoadingComponent } from '../../core/components';
import { ContainerWrapperStyled, ButtonStyled, CardStyled } from '../../core/stylesheets/core.styles';
import { Row, Column } from '../../core/stylesheets/column-row.styles'; 
import { fetchingPosts } from "../../../redux/modules/postsReducer";
import { Container,PostCard} from '../stylesheets/UserInfo.style';




export class UserPostListPage extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.fetchingPosts();
  }
  redirectPath() {
    //this.props.fetchingPosts();
  }
  redirectPath  = (path) => {
    this.props.history.push(path);
  }
  render() {
    const { posts,username,isFetching,userId} = this.props;
    console.log(posts.length);
    return (
      <DocumentTitle title="Booking App - Information">
        <ContainerWrapperStyled>
          
          <Row>
            <Column md="3" sm="3">
              <MenuPanel redirect={(path)=>this.redirectPath(path)} username={username} userId={userId}/>
            </Column>
            <Column md="9" sm="9">
              <Container>
              {
                posts.map(post => <UsersPost redirectPath={(path)=>this.redirectPath(path)} key={post.id} post={post}/>)
              }
               
                              {
                isFetching && <LoadingComponent />
              }

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
  const{ isFetching,posts,errors} = state.post.posts;
  return {
    isFetching,
    posts,
    errors,
    username: state.auth.username,
    userId: state.auth.userId,
    
  };
}


export const mapDispatchToProps = dispatch => ({
fetchingPosts: () => dispatch(fetchingPosts()),

}) 
export default connect(mapStateToProps, mapDispatchToProps)(UserPostListPage);
