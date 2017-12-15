import { REHYDRATE } from 'redux-persist/constants';
import { takeEvery, call, take, put, all, select } from 'redux-saga/effects';
import _ from 'lodash';

import history from '../../history'
import {
  authLoginFaile, authLoginSuccess,authSignUpSuccess,authSignUpFaile,
  AUTH_LOGIN, AUTH_LOGOUT,AUTH_SIGNUP, AUTH_SIGNUP_SUCCESS
} from '../modules/authReducer';
import { persistedDone } from '../modules/configReducer';
import { postLogin ,postSignUp} from '../../api-services/auth';
import request from './coreSaga';


export function* afterPersist() {
  // should dispatch persist done
  yield put(persistedDone());
}

export function* login(action) {
  try {
    const { username, password } = action;
    const option = postLogin(username, password);
    const response = yield call(request, postLogin(username, password));
    const { data } = response;
 
    yield put(authLoginSuccess({
      token: data.token,
      username: data.username,
      userId: data.userId,
    }));
  } catch(error) {
    console.log(error);
    
    const errors = _.get(error, 'response.data.errors', 'unknow');
    yield put(authLoginFaile(errors));
  }
}
export function* signUp(action) {
  try {
    console.log(action);
    const { username, password,first_name,last_name,phone,email,user_type_id,repassword} = action;
    const option = postSignUp(username, password,first_name,last_name,phone,email,user_type_id,repassword);
    const response = yield call(request, postSignUp(username, password,first_name,last_name,phone,email,user_type_id,repassword));
    const { data } = response;
    yield put(authSignUpSuccess({
      token: "",
      username: data.username,
    }));
    yield call(history.push, '/login');
  } catch(error) {
    const errors = _.get(error, 'response.data.errors', 'unknow');
    yield put(authSignUpFaile(errors));
  }
}

export default function* authSagaFlow() {
  yield all([
    takeEvery([AUTH_LOGIN], login),
    takeEvery([AUTH_SIGNUP], signUp),
    
    takeEvery([REHYDRATE], afterPersist),
  ]);
}
