import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { setShowSuccess } from '../actions';
import { endLoading } from '../loading';

const AlertError = () => {
  const isShowAlert = useSelector((state) => state.ui.isShowAlert);
  const isShowSuccess = useSelector((state) => state.ui.isShowSuccess);
  const dispatch = useDispatch();
  const closeAlert = () => {
    dispatch(setShowSuccess());
  };
  if (isShowAlert) {
    endLoading();
    return (
      <Alert variant="danger">
        Соединение было прервано, Попробуйте повторить еще раз!
      </Alert>
    );
  }
  if (isShowSuccess) {
    endLoading();
    return (
      <Alert variant="success" onClose={closeAlert} dismissible>
        Операция прошла успешно!
      </Alert>
    );
  }
  return null;
};

export default AlertError;
