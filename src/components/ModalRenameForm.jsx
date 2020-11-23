import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form as RFForm, Field } from 'react-final-form';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import { renameChannel, hideFormRename } from '../actions';

const ModalRenameForm = () => {
  const isShowFormRename = useSelector((state) => state.ui.isShowFormRename);
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(renameChannel(isShowFormRename.id, values.channel));
    dispatch(hideFormRename());
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
                    maxLength={9}
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

export default ModalRenameForm;