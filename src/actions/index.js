import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const showModal = createAction('MODAL_SHOW');
export const hideModal = createAction('MODAL_HIDE');
export const addMessage = createAction('MESSAGE_ADD');
export const sendMessageSuccess = createAction('SEND_MESSAGE_SUCCES');
export const sendMessageRequest = createAction('SEND_MESSAGE_REQUEST');
export const sendMessageFailure = createAction('SEND_MESSAGE_FAILURE');

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
