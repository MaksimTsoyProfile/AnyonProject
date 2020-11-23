import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { hideFormRename } from '../actions';
import ModalRenameForm from './ModalRenameForm';

const ModalAddChannel = () => {
  const isShowFormRename = useSelector((state) => state.ui.isShowFormRename);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideFormRename());
  };
  return (
    <Modal show={isShowFormRename.isShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Channel Name:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalRenameForm />
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddChannel;
