import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import patients from './patients';

const rootReducer = combineReducers({
  user,
  flash,
  patients
});

export default rootReducer;
