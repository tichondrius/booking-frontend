import { REHYDRATE } from 'redux-persist/constants';
import { takeEvery, call, take, put, all, select } from 'redux-saga/effects';
import axios from 'axios';

import {
    FETCH_ROOM_BYID, FetchedFullFilledByID,
  } from '../modules/roomReducer'
import { getRoom } from '../../api-services/room';
import request from './coreSaga';


  
export function* getRoomByID(action) {
  try {
    const { roomID } = action;
    const response = yield call(request, getRoom(roomID));
    const { data } = response;
    const room = data[0];
    yield put(FetchedFullFilledByID({
      room
    }))
  } catch(error) {
      console.log(error);
  }
}
  
export default function* roomSagaFlow() {
  yield all([
    takeEvery([FETCH_ROOM_BYID], getRoomByID)
  ]);
}