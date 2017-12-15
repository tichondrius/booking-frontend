export const postPosts = (datat) => ({
    method: 'post',
    url: 'api/posts/create',
    data: datat
  });


  export const getPostByUser = () => ({
    method: 'get',
    url: 'api/posts/getPostByUser'
  });
  

  export const getListCustomerByOrder = (userID,postID) => ({
    method: 'get',
    url: `api/users/getListCustomerByOrder/${userID}/${postID}`,
  });


  export const updateStatusAPI = (postId,status) => ({
    method: 'put',
    url: `/api/posts/updateStatus`,
    data:{
      postId,
      status
    }
  });