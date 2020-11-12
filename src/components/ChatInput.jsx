import React from 'react';
import { Form as RFForm, Field } from 'react-final-form';
import { Form, Button } from 'react-bootstrap';

const ChatInput = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <RFForm onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field name="textMessage" component="input" placeholder="First Name" />
          <Button variant="light" type="submit" style={{ backgroundColor: '#3CB371' }}>
            Submit
          </Button>
        </Form>
      )}
    </RFForm>
  );
};

export default ChatInput;
