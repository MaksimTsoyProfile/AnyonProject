import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

const AlertError = () => {
  const isShowAlert = useSelector((state) => state.ui.isShowAlert);
  return (isShowAlert) ? (
    <Alert variant="danger">
      Соединение было прервано, Ваше сообщение не дошло до адресата!
    </Alert>
  ) : (
    null
  );
};

export default AlertError;
