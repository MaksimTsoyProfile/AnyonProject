import React, { useContext } from 'react';
import { Form as RFForm, Field } from 'react-final-form';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../socket';
import { addMessage, addMessageSuccess } from '../actions';
import UserNameContext from './Context';
import randomColor from '../colors';

const ChatInput = () => {
  const dispatch = useDispatch();
  const color = randomColor();
  const userName = useContext(UserNameContext);
  const isAddMessageSuccess = useSelector((state) => state.ui.isAddMessageSuccess);
  const currentChannelId = useSelector((state) => state.server.currentChannelId);
  socket.on('newMessage', ({ data: { attributes } }) => {
    dispatch(addMessageSuccess(attributes));
  });
  const onSubmit = (values, form) => {
    dispatch(addMessage({
      text: values.text,
      userName,
      currentChannelId,
      color,
    }));
    setTimeout(form.restart);
  };
  const validate = (values) => {
    if (!values.text) {
      return {
        text: 'Field is empthy ',
      };
    }
    return {};
  };

  return (
    <RFForm
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field name="text">
            {({ input, meta }) => (
              <>
                <Form.Control
                  name={input.name}
                  onChange={input.onChange}
                  value={input.value}
                  as="textarea"
                  rows={4}
                />
                {meta.error
                && meta.touched
                && <span style={{ color: 'red' }}>{meta.error}</span>}
              </>
            )}
          </Field>
          {(isAddMessageSuccess) ? (
            <Button variant="light" type="submit" style={{ backgroundColor: '#3CB371' }}>
              Submit
            </Button>
          ) : (
            <Button variant="light" type="submit" style={{ backgroundColor: '#3CB371' }} disabled>
              Submit
            </Button>
          )}
        </Form>
      )}
    </RFForm>
  );
};

export default ChatInput;
