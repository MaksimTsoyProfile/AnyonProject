import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { uniqueId, omit } from 'lodash';
import * as actions from '../actions';

const server = handleActions({
  [actions.addMessageSuccess](state, { payload: newMessage }) {
    return {
      ...state,
      messages: state.messages.concat(newMessage),
    };
  },
}, {});

const ui = handleActions({
  [actions.showModal](state) {
    return {
      ...state,
      isShowModal: true,
    };
  },
  [actions.hideModal](state) {
    return {
      ...state,
      isShowModal: false,
    };
  },
  [actions.addMessageSuccess](state) {
    return {
      ...state,
      isAddMessageSuccess: true,
    };
  },
  [actions.addMessageFailure](state) {
    return {
      ...state,
      isAddMessageSuccess: false,
    };
  },
}, {});

const rootReducer = combineReducers({
  server,
  ui,
});

export default rootReducer;
