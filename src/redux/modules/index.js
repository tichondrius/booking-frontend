import { combineReducers } from 'redux';

import authReducer from './authReducer';
import uiReducer from './uiReducer';
import roomReducer from './roomReducer';
import configReducer from './configReducer';
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import ciDiReducer from './cityDistrictsReducer';



const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  room: roomReducer,
  config: configReducer,
  user: userReducer,
  post : postsReducer,
  ciDi: ciDiReducer,
});

export default rootReducer;