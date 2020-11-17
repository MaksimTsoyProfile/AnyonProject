import React, { useContext } from 'react';
import { Form as RFForm, Field } from 'react-final-form';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../actions';
import UserDataContext from './Context';

const ChatInput = () => {
  const dispatch = useDispatch();
  const userData = useContext(UserDataContext);
  const [userName, color] = userData;
  const currentChannelId = useSelector((state) => state.server.currentChannelId);
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
    <Container className="pl-0">
      <RFForm
        onSubmit={onSubmit}
        validate={validate}
      >
        {({ handleSubmit, pristine, submiting }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="text">
              {({ input }) => (
                <>
                  <Form.Control
                    name={input.name}
                    onChange={input.onChange}
                    value={input.value}
                    as="textarea"
                    rows={3}
                  />
                </>
              )}
            </Field>
            <Button
              variant="light"
              type="submit"
              id="styleSubmitButton"
              disabled={pristine || submiting}
            >
              Submit
            </Button>
          </Form>
        )}
      </RFForm>
    </Container>
  );
};

export default ChatInput;
