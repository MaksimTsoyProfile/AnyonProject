import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import gon from 'gon';
import { uniqueId, omit } from 'lodash';

const channels = handleActions({

}, gon.channels);

const rootReducer = combineReducers({
  channels,
});

export default rootReducer;
