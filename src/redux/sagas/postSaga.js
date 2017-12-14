import { REHYDRATE } from 'redux-persist/constants';
import { takeEvery, call, take, put, all, select } from 'redux-saga/effects';
import _ from 'lodash';
import {

  POST_POST,
    postingPost,postingPostSuccess,postingPostFail
  } from '../modules/postsReducer'
import {postPosts } from '../../api-services/post';
import request from './coreSaga';


  


export function* postNewPost(action) {
  try {
    
    const { title,username,description,	city_id,	district_id,address,	price,price2,images,room_type_id} = action;
    console.log(images);
    let datat = new FormData();
    datat.append('title', title);    
    datat.append('user_id', 21);
    datat.append('description', description);
    datat.append('city_id', city_id);
    datat.append('district_id', district_id);
    datat.append('address', address);
    datat.append('price', price);
    datat.append('price2', price);
    datat.append('images', images);
    datat.append('room_type_id', room_type_id);
    
    
    
    


    const response = yield call(request, postPosts(datat));
    const { data } = response;
    yield put(postingPostSuccess(data)); 
  } catch(error) {
    console.log('error', error);
    const errors = _.get(error, 'response.data.errors', 'unknow');
    yield put(postingPostFail(errors));
  }
}


export default function* postSagaFlow() {
  yield all([
    takeEvery([POST_POST], postNewPost),

    
  ]);
}