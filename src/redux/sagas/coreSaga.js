import axios from 'axios';
import { takeEvery, call, take, put, all, select } from 'redux-saga/effects';
import _ from 'lodash';
import { authLogout } from '../modules/authReducer'

const BASE_URL = process.env.BASE_URL || 'https://chiasephong.herokuapp.com/'

export const getToken = state => state.auth.token;

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
})

export default function* request(option) {
  const token = yield select(getToken);
  if (token) {
    option.headers = _.extend(option.headers, {
      Authorization: `Bearer ${token}`,
    });
  }
  console.log('options request', option);
  const response = yield call(instance.request, option);
  
  const { code } = response;
  // We should dipatch log out when reveived 401, 403 network status
  if (code === 401 || code === 403) {
    yield put(authLogout());
  }
  else return response;
}

//test

// export  function* putUser(username,first_name,last_name,phone,email,avatar){
//   let data = new FormData();
//   data.append('avatar', avatar);
//   data.append('first_name', first_name);
//   data.append('last_name', last_name);
//   data.append('phone', phone);
//   data.append('username', username);
//   data.append('email', email);
  
//   instance.post('api/users/21',data).then(response => response);

// }