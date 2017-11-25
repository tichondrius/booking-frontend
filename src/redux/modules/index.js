import { combineReducers } from 'redux';

import authReducer from './authReducer';
import uiReducer from './uiReducer';
import roomReducer from './roomReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  room: roomReducer
});

export default rootReducer;