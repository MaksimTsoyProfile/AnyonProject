import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainView from './MainView';
import ModalAddChannel from './ModalAddChannel';
import ChannelsView from './ChannelsView';
import ModalAlert from './ModalAlert';
import ModalRenameChannel from './ModalRenameChannel';

const App = () => (
  <Container>
    <Row>
      <Col md={4}><ChannelsView /></Col>
      <Col md={8}><MainView /></Col>
    </Row>
    <ModalAddChannel />
    <ModalAlert />
    <ModalRenameChannel />
  </Container>
);

export default App;
