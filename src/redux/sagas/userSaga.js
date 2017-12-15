import { REHYDRATE } from 'redux-persist/constants';
import { takeEvery, call, take, put, all, select } from 'redux-saga/effects';
import _ from 'lodash';

import {
  fetchingUserSuccess,fetchingUserFail, updatingUserSuccess,updatingUserFail,
  USER_GET,USER_PUT
} from '../modules/userReducer';
import { getUser,putUser } from '../../api-services/user';
import request from './coreSaga';




export function* getUserByID(action) {
  try {
    const { userId } = action;
    const response = yield call(request, getUser(userId));
    const { data } = response;
    yield put(fetchingUserSuccess(data)); 
  } catch(error) {
    const errors = _.get(error, 'response.data.errors', 'unknow');
    yield put(fetchingUserFail(errors));
  }
}
export function* putUserByID(action) {
  try {
    const {  username,first_name,last_name,phone,email,avatar,userId} = action;

    let datat = new FormData();
    console.log(avatar)
    datat.append('avatar', avatar);    
    datat.append('first_name', first_name);
    datat.append('last_name', last_name);
    datat.append('phone', phone);
    datat.append('username', username);
    datat.append('email', email);
  
    console.log(action);
    const response = yield call(request, putUser(datat,userId));

    const { data } = response;
    yield put(updatingUserSuccess(data)); 


  } catch(error) {
    const errors = _.get(error, 'response.data.errors', 'unknow');
    yield put(updatingUserFail(errors));
  }
}

export default function* userSagaFlow() {
  yield all([
    takeEvery([USER_GET], getUserByID),
    takeEvery([USER_PUT], putUserByID)
    
  ]);
}
