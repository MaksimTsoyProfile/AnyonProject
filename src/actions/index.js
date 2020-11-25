import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const showModal = createAction('MODAL_SHOW');
export const hideModal = createAction('MODAL_HIDE');
export const setChannel = createAction('CHANNEL_SET');
export const removeCurrentChannel = createAction('CURRENT_CHANNEL_REMOVE');
export const renameCurrentChannel = createAction('CURRENT_CHANNEL_RENAME');
export const setCurrentId = createAction('CURRENT_ID_SET');
export const showFormRemove = createAction('FORM_REMOVE_SHOW');
export const hideFormRemove = createAction('FORM_REMOVE_HIDE');
export const showFormRename = createAction('FORM_RENAME_SHOW');
export const hideFormRename = createAction('FORM_RENAME_HIDE');
export const setShowSuccess = createAction('SHOW_SUCCESS_SET');

export const addMessage = createAction('MESSAGE_ADD');
export const sendMessageSuccess = createAction('SEND_MESSAGE_SUCCESS');
export const sendMessageRequest = createAction('SEND_MESSAGE_REQUEST');
export const sendMessageFailure = createAction('SEND_MESSAGE_FAILURE');

export const addChannel = createAction('CHANNEL_ADD');
export const sendChannelSuccess = createAction('SEND_CHANNEL_SUCCESS');
export const sendChannelRequest = createAction('SEND_CHANNEL_REQUEST');
export const sendChannelFailure = createAction('SEND_CHANNEL_FAILURE');

export const renameChannelSuccess = createAction('RENAME_CHANNEL_SUCCESS');
export const renameChannelRequest = createAction('RENAME_CHANNEL_REQUEST');
export const renameChannelFailure = createAction('RENAME_CHANNEL_FAILURE');

export const removeChannelSuccess = createAction('REMOVE_CHANNEL_SUCCESS');
export const removeChannelRequest = createAction('REMOVE_CHANNEL_REQUEST');
export const removeChannelFailure = createAction('REMOVE_CHANNEL_FAILURE');

export const sendMessage = ({
  userName, text, currentChannelId, color,
}) => async (dispatch) => {
  dispatch(sendMessageRequest());
  try {
    await axios.post(routes.channelMessagesPath(currentChannelId), {
      data: {
        attributes: {
          text,
          userName,
          color,
          date: new Date().toLocaleTimeString(),
        },
      },
    });
    dispatch(sendMessageSuccess());
    return null;
  } catch (e) {
    dispatch(sendMessageFailure());
    return e;
  }
};

export const sendChannel = (channelName) => async (dispatch) => {
  dispatch(sendChannelRequest());
  try {
    await axios.post(routes.channelsPath(), {
      data: {
        attributes: {
          name: channelName,
        },
      },
    });
    dispatch(sendChannelSuccess());
    return 'finish';
  } catch (e) {
    dispatch(sendChannelFailure());
    return 'finish';
  }
};

export const removeChannel = (channelId) => async (dispatch) => {
  dispatch(removeChannelRequest());
  try {
    await axios.delete(routes.channelPath(channelId));
    dispatch(removeChannelSuccess());
  } catch (e) {
    dispatch(removeChannelFailure());
  }
};

export const renameChannel = (channelId, channelName) => async (dispatch) => {
  dispatch(renameChannelRequest());
  try {
    await axios.patch(routes.channelPath(channelId), {
      data: {
        attributes: {
          name: channelName,
        },
      },
    });
    dispatch(renameChannelSuccess());
  } catch (e) {
    dispatch(renameChannelFailure());
  }
};
