import {combineReducers} from 'redux';
import AppReducer from '../Reducers/AppReducer';

export default combineReducers({
  app: AppReducer,
});
