import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChannelsView from './ChannelsView';
import MainView from './MainView';
import ModalAddChannel from './ModalAddChannel';

const App = () => (
  <Container>
    <Row>
      <Col sm={3}><ChannelsView /></Col>
      <Col sm={9}><MainView /></Col>
    </Row>
    <ModalAddChannel />
  </Container>
);

export default App;
