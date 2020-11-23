import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeChannel, hideModalAlert } from '../actions';

const ModalAddChannel = () => {
  const isShowModalAlert = useSelector((state) => state.ui.isShowModalAlert);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideModalAlert());
  };
  const onClickRemove = () => {
    dispatch(removeChannel(isShowModalAlert.id));
    dispatch(hideModalAlert());
  };
  return (
    <Modal show={isShowModalAlert.isShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Attention:</Modal.Title>
      </Modal.Header>
      <Modal.Body>The deletion will be irrevocable, are you sure?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onClickRemove}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddChannel;
