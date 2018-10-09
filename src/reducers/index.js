import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import aboutReducer from './aboutReducer';
import mixReducer from './mixReducer';
import eventReducer from './eventReducer';
import contactReducer from './contactReducer';

export default combineReducers({
  home: homeReducer,
  about: aboutReducer,
  mix: mixReducer,
  event: eventReducer,
  contact: contactReducer
});
