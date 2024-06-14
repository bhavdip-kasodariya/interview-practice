import {combineReducers} from 'redux';
import {createReducer} from '../CommonConfig/ReduxHelpers';
import * as Actions from '../Actions/Types';

const loadingReducer = createReducer({
  initialState: false,
  actionType: Actions.APP_SET_LOADING,
});

export default combineReducers({
  loading: loadingReducer,
});
