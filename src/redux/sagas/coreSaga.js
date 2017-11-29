import axios from 'axios';
import { takeEvery, call, take, put, all, select } from 'redux-saga/effects';
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
    option.headers.Authorization = `Bearer ${token}`;
  }
  const response = yield call(instance.request, option);
  console.log('response', response);
  const { code } = response;
  // We should dipatch log out when reveived 401, 403 network status
  if (code === 401 || code === 403) {
    yield put(authLogout());
  }
  else return response;
}
