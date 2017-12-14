


export const POST_POST = 'post/POST_POST';
export const POST_POST_SUCCESS = 'post/POST_POST_SUCCESS';
export const POST_POST_FAIL = 'post/POST_POST_FAIL';

export const postingPost = (title,username,description,	city_id,	district_id,address,	price,price2,images,room_type_id) => ({
    type: POST_POST,
    title,username,description,	city_id,	district_id,address,	price,price2,images,room_type_id
  });
  
  export const postingPostFail = (errors) => ({
    type: POST_POST_FAIL,
    errors,
  });
  
  export const postingPostSuccess = (user) => ({
    type: POST_POST_SUCCESS,
    user,
  })   
  

const initialState = {

    posting: false,
    errorMessage: null,
    isUpdated: false
}


const postsReducer = (state = initialState, action = {}) => {
    switch(action.type) {
  
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