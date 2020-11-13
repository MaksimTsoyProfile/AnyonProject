import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { uniqueId, omit } from 'lodash';

const messages = handleActions({

}, {});

const channels = handleActions({

}, {});

const rootReducer = combineReducers({
  messages,
  channels,
});

export default rootReducer;
