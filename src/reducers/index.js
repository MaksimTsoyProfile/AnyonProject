import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';

const server = handleActions({
  [actions.addMessage](state, { payload: newMessage }) {
    return {
      ...state,
      messages: state.messages.concat(newMessage),
    };
  },
  [actions.setChannel](state, { payload: channelId }) {
    return {
      ...state,
      currentChannelId: channelId,
    };
  },
  [actions.addChannel](state, { payload: newChannel }) {
    return {
      ...state,
      channels: state.channels.concat(newChannel),
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
  [actions.sendMessageSuccess](state) {
    return {
      ...state,
      isShowAlert: false,
    };
  },
  [actions.sendMessageFailure](state) {
    return {
      ...state,
      isShowAlert: true,
    };
  },
  [actions.sendMessageRequest](state) {
    return {
      ...state,
      isShowAlert: false,
    };
  },
}, {});

const rootReducer = combineReducers({
  server,
  ui,
});

export default rootReducer;
