import { REHYDRATE } from 'redux-persist/constants';
import { takeEvery, call, take, put, all, select } from 'redux-saga/effects';
import _ from 'lodash';
import {

    FETCHING_CITIES,FETCHING_DISTRISCTS,
    fetchCitiesFail,fetchCitiesSuccess,
    fetchDistrictsFail,fetchDistrictsSuccess,
  } from '../modules/cityDistrictsReducer'
import {getCities,getDistricts } from '../../api-services/ciDi';
import request from './coreSaga';


  


export function* getAllCities() {
  try {
    const response = yield call(request, getCities());
    const { data } = response;
    yield put(fetchCitiesSuccess(data)); 
  } catch(error) {
    console.log('error', error);
    const errors = _.get(error, 'response.data.errors', 'unknow');
    yield put(fetchCitiesFail(errors));
  }
}

export function* getAllDistricts() {
  try {
    const response = yield call(request, getDistricts());
    const { data } = response;
    yield put(fetchDistrictsSuccess(data)); 
  } catch(error) {
    console.log('error', error);
    const errors = _.get(error, 'response.data.errors', 'unknow');
    yield put(fetchDistrictsFail(errors));
  }
}
export default function* ciDiSagaFlow() {
  yield all([
    takeEvery([FETCHING_CITIES], getAllCities),
    takeEvery([FETCHING_DISTRISCTS], getAllDistricts),
    
  ]);
}