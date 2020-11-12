import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChannelsView from './ChannelsView';
import ChatView from './ChatView';

const App = () => (
  <Container>
    <Row>
      <Col><ChannelsView /></Col>
      <Col><ChatView /></Col>
    </Row>
  </Container>
);

export default App;
