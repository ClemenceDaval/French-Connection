import { combineReducers } from 'redux';

import userReducer from './user';
import logReducer from './log';
import mapReducer from './map';
import hobbiesReducer from './hobbies';
import servicesReducer from './services';
import modalsReducer from './modals';

const rootReducer = combineReducers({
  user: userReducer,
  log: logReducer,
  map: mapReducer,
  hobbies: hobbiesReducer,
  services: servicesReducer,
  modals: modalsReducer,

});

export default rootReducer;
