import { REHYDRATE } from 'redux-persist/constants';
import { takeEvery, call, take, put, all, select } from 'redux-saga/effects';

import {
  persistedDone, authLoginFaile, authLoginSuccess,
  AUTH_LOGIN, AUTH_LOGOUT
} from '../modules/authReducer'

const fakeLogin = (username, password) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const response = {
      data: {
        username: username,
        token: 'abcxyz--token',
      },
      statusCode: 200,
    }
    resolve(response)
  }, 2000);
});


export function* afterPersist() {
  // should dispatch persist done
  yield put(persistedDone());
}

export function* login(action) {
  try {
    const { username, password } = action;
    const response = yield call(fakeLogin, username, password);
    console.log('response', response);
    const { data, error } = response;
    if (error) {
      // should put login faile
      yield put(authLoginFaile('unknow'));
    }
    else {
      if (data.error) {
        yield put(authLoginFaile(error));
      }
      else {
        const { token, username } = data;
        yield put(authLoginSuccess({
          token,
          username
        }))
      }
    }
  } catch(error) {
    yield put(authLoginSuccess());
  }
}


export default function* authSagaFlow() {
  yield all([
    takeEvery([AUTH_LOGIN], login),
    takeEvery([REHYDRATE], afterPersist),
  ]);
}
