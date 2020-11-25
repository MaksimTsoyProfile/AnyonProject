import React, { useContext } from 'react';
import { Form as RFForm, Field } from 'react-final-form';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../actions';
import UserDataContext from './Context';

const ChatInput = () => {
  const dispatch = useDispatch();
  const [userName, color] = useContext(UserDataContext);
  const currentChannelId = useSelector((state) => state.server.currentChannelId);
  const onSubmit = (values, form) => {
    dispatch((sendMessage({
      text: values.text,
      userName,
      currentChannelId,
      color,
    }))).then((data) => (data ? null : form.restart()));
  };
  return (
    <RFForm
      onSubmit={onSubmit}
    >
      {({ handleSubmit, pristine, submiting }) => (
        <Form onSubmit={handleSubmit}>
          <Field name="text">
            {({ input }) => (
              <Form.Control
                name={input.name}
                onChange={input.onChange}
                value={input.value}
                cols={40}
                rows={3}
              />
            )}
          </Field>
          <Button
            variant="light"
            type="submit"
            id="style-submit-button"
            disabled={pristine || submiting}
          >
            Submit
          </Button>
        </Form>
      )}
    </RFForm>
  );
};

export default ChatInput;
