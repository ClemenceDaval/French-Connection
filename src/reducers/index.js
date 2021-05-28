import { combineReducers } from 'redux';

import userReducer from './user';
import logReducer from './log';
import mapReducer from './map';
import hobbiesReducer from './hobbies';
import servicesReducer from './services';
import modalsReducer from './modals';
import signInReducer from './signIn';

const rootReducer = combineReducers({
  user: userReducer,
  log: logReducer,
  map: mapReducer,
  hobbies: hobbiesReducer,
  services: servicesReducer,
  modals: modalsReducer,
  signIn: signInReducer,
});

export default rootReducer;
