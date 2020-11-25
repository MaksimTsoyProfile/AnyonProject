import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainView from './MainView';
import ModalAddChannel from './ModalAddChannel';
import ChannelsView from './ChannelsView';
import ModalRemoveChannel from './ModalRemoveChannel';
import ModalRenameChannel from './ModalRenameChannel';

const App = () => (
  <Container>
    <Row>
      <Col md={4} xs={12}><ChannelsView /></Col>
      <Col md={8} xs={12}><MainView /></Col>
    </Row>
    <ModalAddChannel />
    <ModalRemoveChannel />
    <ModalRenameChannel />
  </Container>
);

export default App;
