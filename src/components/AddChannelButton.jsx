import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { showModal } from '../actions';

const ButtonAddChannel = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(showModal());
  };
  return (
    <Button
      id="style-add-button"
      onClick={onClick}
    >
      Add channel
    </Button>
  );
};

export default ButtonAddChannel;
