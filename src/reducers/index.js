import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { omitBy } from 'lodash';
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
      channels: { ...state.channels, [newChannel.id]: newChannel },
    };
  },
  [actions.removeCurrentChannel](state, { payload: id }) {
    return {
      ...state,
      channels: omitBy(state.channels, (value, key) => (Number(key) === id)),
    };
  },
  [actions.renameCurrentChannel](state, { payload: channel }) {
    return {
      ...state,
      channels: { ...state.channels, [channel.id]: channel },
    };
  },
  [actions.setCurrentId](state, { payload: id }) {
    return {
      ...state,
      currentChannelId: id,
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
  [actions.setShowSuccess](state) {
    return {
      ...state,
      isShowSuccess: false,
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
      isShowSuccess: false,
    };
  },
  [actions.sendChannelSuccess](state) {
    return {
      ...state,
      isShowAlert: false,
      isShowSuccess: true,
    };
  },
  [actions.sendChannelFailure](state) {
    return {
      ...state,
      isShowAlert: true,
    };
  },
  [actions.sendChannelRequest](state) {
    return {
      ...state,
      isShowAlert: false,
      isShowSuccess: false,
    };
  },
  [actions.renameChannelSuccess](state) {
    return {
      ...state,
      isShowAlert: false,
      isShowSuccess: true,
    };
  },
  [actions.renameChannelFailure](state) {
    return {
      ...state,
      isShowAlert: true,
    };
  },
  [actions.renameChannelRequest](state) {
    return {
      ...state,
      isShowAlert: false,
      isShowSuccess: false,
    };
  },
  [actions.removeChannelSuccess](state) {
    return {
      ...state,
      isShowAlert: false,
      isShowSuccess: true,
    };
  },
  [actions.removeChannelFailure](state) {
    return {
      ...state,
      isShowAlert: true,
    };
  },
  [actions.removeChannelRequest](state) {
    return {
      ...state,
      isShowAlert: false,
      isShowSuccess: false,
    };
  },
  [actions.showFormRemove](state, { payload: id }) {
    return {
      ...state,
      isShowModalAlert: { isShow: true, id },
    };
  },
  [actions.hideFormRemove](state, { payload: id }) {
    return {
      ...state,
      isShowModalAlert: { isShow: false, id },
    };
  },
  [actions.showFormRename](state, { payload: { id, name: initialValue } }) {
    return {
      ...state,
      isShowFormRename: { isShow: true, id, initialValue },
    };
  },
  [actions.hideFormRename](state, { payload: id }) {
    return {
      ...state,
      isShowFormRename: { isShow: false, id },
    };
  },
}, {});

const rootReducer = combineReducers({
  server,
  ui,
});

export default rootReducer;
