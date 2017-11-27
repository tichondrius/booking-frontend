import { REHYDRATE } from 'redux-persist/constants';
import { takeEvery, call, take, put, all, select } from 'redux-saga/effects';
import axios from 'axios';

import {
    FETCH_ROOM_BYID,FetchedFullFilledByID
  } from '../modules/roomReducer'
import request from './core.saga';

  export const getRoom = (id) => ({
    url: `api/posts/${id}`,
    method: 'GET',
  });

  
  export function* getRoomByID(action) {
    try {
      const { roomID } = action;
      const response = yield call(request, getRoom(roomID));
      console.log('response', response);
      const { data, error } = response;
      if (error) {
        // should put login faile
        //yield put(authLoginFaile('unknow'));
        console.log(error);
      }
      else {
        if (data.error) {
          //yield put(authLoginFaile(error));
          console.log(data.error);
        }
        else {
          const room = data[0];
          yield put(FetchedFullFilledByID({

            room
          }))
        }
      }
    } catch(error) {
        console.log(error);
      //yield put(authLoginSuccess());
    }
  }
  
  export default function* roomSagaFlow() {
    yield all([
      takeEvery([FETCH_ROOM_BYID], getRoomByID)
    ]);
  }