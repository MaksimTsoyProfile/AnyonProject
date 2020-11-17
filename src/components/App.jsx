import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ChannelsView from './ChannelsView';
import MainView from './MainView';
import ModalAddChannel from './Modal';
import socket from '../socket';
import { addMessageSuccess } from '../actions';

const App = () => {
  const dispatch = useDispatch();
  socket.on('newMessage', ({ data: { attributes } }) => {
    dispatch(addMessageSuccess(attributes));
  });
  return (
    <Container>
      <Row>
        <Col sm={3}><ChannelsView /></Col>
        <Col sm={9}><MainView /></Col>
      </Row>
      <ModalAddChannel />
    </Container>
  );
};

export default App;
