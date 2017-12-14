import { all } from 'redux-saga/effects';
import authSagaFlow from './authSaga';
import roomSagaFlow from './roomSaga';
import userSagaFlow from './userSaga';
import ciDiSagaFlow from './ciDiSaga';
import postSagaFlow from './postSaga';




export default function* rootSaga() {
  yield all([
    authSagaFlow(),
    roomSagaFlow(),
    userSagaFlow(),
    ciDiSagaFlow(),
    postSagaFlow()
  ]);
}
