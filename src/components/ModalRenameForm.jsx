import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form as RFForm, Field } from 'react-final-form';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import { renameChannel, hideFormRename } from '../actions';
import { startLoading } from '../loading';

const ModalRenameForm = () => {
  const isShowFormRename = useSelector((state) => state.ui.isShowFormRename);
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    startLoading();
    dispatch(renameChannel(isShowFormRename.id, values.channel))
      .then(dispatch(hideFormRename()));
  };

  return (
    <RFForm
      onSubmit={onSubmit}
    >
      {({ handleSubmit, pristine, submiting }) => (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={8}>
              <Field name="channel" initialValue={isShowFormRename.initialValue}>
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

export default ModalRenameForm;
