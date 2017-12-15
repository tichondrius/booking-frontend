export const AUTH_LOGIN = 'auth/AUTH_LOGIN';
export const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILE = 'auth/AUTH_LOGIN_FAILE';
//#region SIGN UP
export const AUTH_SIGNUP = 'auth/AUTH_SIGNUP';
export const AUTH_SIGNUP_SUCCESS = 'auth/AUTH_SIGNUP_SUCCESS';
export const AUTH_SIGNUP_FAILE = 'auth/AUTH_SIGNUP_FAILE';
//#endregion
export const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';
export const FLUSH_LOGIN = 'auth/FLUSH_LOGIN';
export const FLUSH_ERROR_LOGIN = 'auth/FLUSH_ERROR_LOGIN';
export const FLUSH_TEMP_DATA = 'auth/FLUSH_TEMP_DATA';



export const authLogin = (username, password) => ({
  type: AUTH_LOGIN,
  username,
  password,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authLoginSuccess = ({ token, username,userId}) => ({
  type: AUTH_LOGIN_SUCCESS,
  token,
  username,userId
});
export const authLoginFaile = (errorMessage) => ({
  type: AUTH_LOGIN_FAILE,
  errorMessage,
});

export const flushErrorLogin = () => ({
  type: FLUSH_ERROR_LOGIN,
});

export const flushTempData = () => ({
  type: FLUSH_TEMP_DATA,
});


//#region SIGN UP
export const authSignUp = (username, password,first_name,last_name,phone,email,user_type_id,repassword ) => ({
  type: AUTH_SIGNUP,
  username,
  password,first_name,last_name,phone,email,user_type_id,repassword
});

export const authSignUpFaile = (errorMessage) => ({
  type: AUTH_SIGNUP_FAILE,
  errorMessage,
});
export const authSignUpSuccess = ({ token, username}) => ({
  type: AUTH_SIGNUP_SUCCESS,
  token,
  username,
  
});
//#endregion




const initialState = {
  token: null,
  username: null,
  isLogging: false,
  errorMessage: null,
  isSignUpSuccess: false,
  userId:null,
}

const authReducer = (state = initialState, action = {}) => {
  switch(action.type) {

    case AUTH_LOGIN: 
      return {
        ...state,
        isLogging: true,
        errorMessage: null,
      }

    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        token: action.token,
        username: action.username,
        userId: action.userId
      }

    case AUTH_LOGIN_FAILE:
      return {
        ...state,
        isLogging: false,
        token: null,
        username: null,
        errorMessage: action.errorMessage,
      }
      case AUTH_SIGNUP: 
      return {
        ...state,
        isLogging: true,
        errorMessage: null,
      }

    case AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        isLogging: false,
        token: action.token,
        username: action.username,
        isSignUpSuccess: true,
      }

    case AUTH_SIGNUP_FAILE:
      return {
        ...state,
        isLogging: false,
        token: null,
        username: null,
        errorMessage: action.errorMessage,
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        isLogging: false,
        token: null,
        username:null,
        errorMessage: null,
      }
    case FLUSH_ERROR_LOGIN: {
      return {
        ...state,
        errorMessage: null,
      }
    }
    case FLUSH_TEMP_DATA: {
      return {
        ...state,
        isSignUpSuccess: false,
      }
    }

    case FLUSH_LOGIN: 
      return initialState;
    
      
    default:
      return state;

  }
}

export default authReducer;