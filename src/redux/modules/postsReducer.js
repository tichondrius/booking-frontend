
export const GET_POSTS = 'post/GET_POSTS';
export const GET_POSTS_SUCCESS = 'post/GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'post/GET_POSTS_FAIL';


export const POST_POST = 'post/POST_POST';
export const POST_POST_SUCCESS = 'post/POST_POST_SUCCESS';
export const POST_POST_FAIL = 'post/POST_POST_FAIL';


//#region POST get user
export const GETUSERS_POST = 'post/GETUSERS_POST';
export const GETUSERS_POST_SUCCESS = 'post/GETUSERS_POST_SUCCESS';
export const GETUSERS_POST_FAIL = 'post/GETUSERS_POST_FAIL';


export const fetchingUserBookPost = (userID,postID) => ({
  type: GETUSERS_POST,
  userID,postID
});

export const fetchUserBookPostFail = (errors) => ({
  type: GETUSERS_POST_FAIL,
  errors,
});

export const fetchUserBookPostSuccess = (users) => ({
  type: GETUSERS_POST_SUCCESS,
  users,
})   
//#endregion


//#region  UpdateStatus
export const UPDATESTATUS_POST = 'post/UPDATESTATUS_POST';
export const UPDATESTATUS_POST_SUCCESS = 'post/UPDATESTATUS_POST_SUCESS';
export const UPDATESTATUS_POST_FAIL = 'post/UPDATESTATUS_POST_FAIL';

export const updateStatusPost = (postID,status) => ({
  type: UPDATESTATUS_POST,
  status,postID
});

export const updateStatusPostFail = (errors) => ({
  type: UPDATESTATUS_POST_FAIL,
  errors,
});

export const updateStatusPostSuccess = (data) => ({
  type: UPDATESTATUS_POST_SUCCESS,
  data,
})   

//#endregion
export const postingPost = (title,username,description,	city_id,	district_id,address,	price,price2,images,room_type_id,user_id) => ({
    type: POST_POST,
    title,username,description,	city_id,	district_id,address,	price,price2,images,room_type_id,user_id
  });
  
  export const postingPostFail = (errors) => ({
    type: POST_POST_FAIL,
    errors,
  });
  
  export const postingPostSuccess = (user) => ({
    type: POST_POST_SUCCESS,
    user,
  })   
  


  export const fetchingPosts = () => ({
    type: GET_POSTS
  });
  
  export const fetchPostFail = (errors) => ({
    type: GET_POSTS_FAIL,
    errors,
  });
  
  export const fetchPostSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    posts,
  })   
  
const initialState = {

    posting: false,
    errorMessage: null,
    isUpdated: false,
    posts:{
      posts: [],
      isFetching: false,
      errors: null,
      
    },
    users:{
      users:[],
      isFetching: false,
      errors: null,
    },
    status:{
      isDone: false,
      errors: null,
    }
}


const postsReducer = (state = initialState, action = {}) => {
    switch(action.type) {
      //#region  GET POST CASE
      case GET_POSTS: 
      return {
        ...state,
        posts: {
          ...state.posts,
          posts: [],
          errors: null,
          isFetching: true,
        }
      }
    case GET_POSTS_FAIL:
      return {
        ...state,
        posts: {
          ...state.posts,
          isFetching: false,
          errors: action.errors,
        }
      };
    
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          ...state.posts,
          isFetching: false,
          posts: action.posts,
        },
      };
      //#endregion

      //#region  GET  USER POST CASE
      case GETUSERS_POST: 
      return {
        ...state,
        users: {
          ...state.users,
          users: [],
          errors: null,
          isFetching: true,
        }
      }
    case GETUSERS_POST_FAIL:
      return {
        ...state,
        users: {
          ...state.users,
          isFetching: false,
          errors: action.errors,
        }
      };
    
    case GETUSERS_POST_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          isFetching: false,
          users: action.users,
        },
      };
      //#endregion
      //#region UPdateStatus
      case UPDATESTATUS_POST_SUCCESS:
      return {
        ...state,
        status: {
          isDone: true,
        },

      }

    case UPDATESTATUS_POST_FAIL:
    return {
      ...state,
      status: {
        isDone: true,
        errors: action.errors,
        
      },
    }
    
      //#endregion

      case POST_POST: 
        return {
          ...state,
          posting: true,
          errorMessage: null,
          isUpdated: false
        }
  
      case POST_POST_SUCCESS:
        return {
          ...state,
          posting: false,
          user: action.user,
          isUpdated: true,

        }
  
      case POST_POST_FAIL:
        return {
            ...state,
            posting: false,
             errorMessage: action.errors,
        }
      
      
      

        
      default:
        return state;
  
    }
  }
  
  export default postsReducer;