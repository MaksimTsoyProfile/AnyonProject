import React from 'react';
import { useDispatch } from 'react-redux';
import { Form as RFForm, Field } from 'react-final-form';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import { sendChannel } from '../actions';

const ModalForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, form) => {
    console.log(values.channel);
    dispatch(sendChannel(values.channel));
    setTimeout(form.restart);
  };

  return (
    <RFForm
      onSubmit={onSubmit}
    >
      {({ handleSubmit, pristine, submiting }) => (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={9}>
              <Field name="channel">
                {({ input }) => (
                  <Form.Control
                    name={input.name}
                    onChange={input.onChange}
                    value={input.value}
                  />
                )}
              </Field>
            </Col>
            <Col sm={3}>
              <Button
                variant="light"
                type="submit"
                id="style-submit-button"
                disabled={pristine || submiting}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </RFForm>
  );
};

export default ModalForm;
