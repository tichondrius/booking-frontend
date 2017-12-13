
export const USER_GET = 'user/USER_GET';
export const USER_GET_SUCCESS = 'user/USER_GET_SUCCESS';
export const USER_GET_FAIL = 'user/USER_GET_FAIL';

export const USER_PUT = 'user/USER_PUT';
export const USER_PUT_SUCCESS = 'user/USER_PUT_SUCCESS';
export const USER_PUT_FAIL = 'user/USER_PUT_FAIL';

export const fetchingUser = (username) => ({
    type: USER_GET,
    username
  });
  
  export const fetchingUserFail = (errors) => ({
    type: USER_GET_FAIL,
    errors,
  });
  
  export const fetchingUserSuccess = (user) => ({
    type: USER_GET_SUCCESS,
    user,
  })   
  
  export const updatingUser = (username,first_name,last_name,phone,email,avatar) => ({
    type: USER_PUT,
    username,first_name,last_name,phone,email,avatar
  });
  
  export const updatingUserFail = (errors) => ({
    type: USER_PUT_FAIL,
    errors,
  });
  
  export const updatingUserSuccess = (user) => ({
    type: USER_PUT_SUCCESS,

    user,
  })   
const initialState = {

    user:{

        user_type_id: null,
        first_name: null,
        last_name: null,
        phone: null,
        email: null,
        avatar:null

    },
    fetching: false,
    fetched: false,
    errorMessage: null,
    isUpdated : false,
  }


const userReducer = (state = initialState, action = {}) => {
    switch(action.type) {
  
      case USER_GET: 
        return {
          ...state,
          fetching: true,
          errorMessage: null,
          isUpdated: false
        }
  
      case USER_GET_SUCCESS:
        return {
          ...state,
          fetching: false,
          user: action.user,

        }
  
      case USER_GET_FAIL:
        return {
            ...state,
            fetching: false,
             errorMessage: action.errorMessage,
        }
      
      


        case USER_PUT: 
        return {
          ...state,
          fetching: true,
          errorMessage: null,
          isUpdated: false,
        }
  
      case USER_PUT_SUCCESS:
        return {
          ...state,
          fetching: false,
          isUpdated: true,
        }
  
      case USER_PUT_FAIL:
        return {
            ...state,
            fetching: false,
             errorMessage: action.errors,
        }
        
      default:
        return state;
  
    }
  }
  
  export default userReducer;