import React from 'react';
import { useDispatch } from 'react-redux';
import { Form as RFForm, Field } from 'react-final-form';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import { sendChannel, hideModal } from '../actions';
import { startLoading } from '../loading';

const ModalForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    startLoading();
    dispatch(sendChannel(values.channel))
      .then(dispatch(hideModal()));
  };

  return (
    <RFForm
      onSubmit={onSubmit}
    >
      {({ handleSubmit, pristine, submiting }) => (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={8}>
              <Field name="channel">
                {({ input }) => (
                  <Form.Control
                    name={input.name}
                    onChange={input.onChange}
                    value={input.value}
                    maxLength={9}
                  />
                )}
              </Field>
            </Col>
            <Col xs={4}>
              <Button
                variant="light"
                type="submit"
                id="style-submit-button"
                disabled={pristine || submiting}
              >
                Accept
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </RFForm>
  );
};

export default ModalForm;
