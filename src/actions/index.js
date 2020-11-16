import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const showModal = createAction('MODAL_SHOW');
export const hideModal = createAction('HIDE_MODAL');

export const addMessageSuccess = createAction('ADD_MESSAGE_SUCCES');
export const addMessageRequest = createAction('ADD_MESSAGE_REQUEST');
export const addMessageFailure = createAction('ADD_MESSAGE_FAILURE');

export const addMessage = ({
  userName, text, currentChannelId, color,
}) => async (dispatch) => {
  dispatch(addMessageRequest());
  try {
    await axios.post(routes.channelMessagesPath(currentChannelId), {
      data: {
        attributes: {
          text,
          userName,
          color,
          date: new Date(),
        },
      },
    });
  } catch (e) {
    dispatch(addMessageFailure());
  }
};
