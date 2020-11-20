import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../actions';
import ModalForm from './ModalForm';

const ModalAddChannel = () => {
  const isShowModal = useSelector((state) => state.ui.isShowModal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideModal());
  };
  return (
    <Modal show={isShowModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Channel Name</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalForm />
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddChannel;
