import { REHYDRATE } from 'redux-persist/constants';
import { takeEvery, call, take, put, all, select, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import {

  POST_POST,
    postingPost,postingPostSuccess,postingPostFail,

    GET_POSTS,
    fetchingPosts,fetchPostSuccess,fetchPostFail,

    GETUSERS_POST,
    fetchingUserBookPost,fetchUserBookPostFail,fetchUserBookPostSuccess,

    UPDATESTATUS_POST,
    updateStatusPost,updateStatusPostFail,updateStatusPostSuccess
  } from '../modules/postsReducer'
import {postPosts,getPostByUser ,getListCustomerByOrder,updateStatusAPI} from '../../api-services/post';
import request from './coreSaga';


  


export function* postNewPost(action) {
  try {
    
    const { title,username,description,	city_id,	district_id,address,	price,price2,images,room_type_id,user_id,lng,lat} = action;
    console.log(lng);
    let datat = new FormData();
    datat.append('title', title);    
    datat.append('user_id', user_id);
    datat.append('description', description);
    if(city_id != -1){
      datat.append('city_id', city_id);
    }
    if(city_id != -1){
     datat.append('district_id', district_id); 
      }
    datat.append('address', address);
    datat.append('price', 1232123);
    datat.append('price2', 21321);
    images.map((value)=>{
      datat.append('images', value);
    
    })
    datat.append('room_type_id', room_type_id);
    datat.append('acreage', 2312);
    datat.append('longtitude', lng);
    datat.append('latitude', lat);

    
    
  
    const response = yield call(request, postPosts(datat));
    const { data } = response;
    yield put(postingPostSuccess(data)); 
  } catch(error) {
    console.log('error', error);
    const errors = _.get(error, 'response.data.errors', 'unknow');
    yield put(postingPostFail(errors));
  }
}

export function* getPosts() {
  try {
    const response = yield call(request, getPostByUser());
    const { data } = response;
    yield put(fetchPostSuccess(data)); 
  } catch(error) {
    console.log('error', error);
    const errors = _.get(error, 'response.data.errors', 'unknow');
    yield put(fetchPostFail(errors));
  }
}

export function* getUserListsPost(action) {
  try {
    console.log(action);
    const {userID,postID} =action;
    const response = yield call(request, getListCustomerByOrder(userID,postID));
    const { data } = response;
    yield put(fetchUserBookPostSuccess(data)); 
  } catch(error) {
    console.log('error', error);
    const errors = _.get(error, 'response.data.errors', 'unknow');
    yield put(fetchUserBookPostFail(errors));
  }
}


export function* updateStatus(action) {
  try {
    const {postID,status} =action;
    const response = yield call(request, updateStatusAPI(postID,status));
    const { data } = response;
    yield put(updateStatusPostSuccess(data)); 
  } catch(error) {
    console.log('error', error);
    const errors = _.get(error, 'response.data.errors', 'unknow');
    yield put(updateStatusPostFail(errors));
  }
}


export default function* postSagaFlow() {
  yield all([
    takeEvery([POST_POST], postNewPost),
    takeEvery([GET_POSTS], getPosts),
    takeEvery([GETUSERS_POST], getUserListsPost),
    takeLatest([UPDATESTATUS_POST], updateStatus),
    
    

    
  ]);
}