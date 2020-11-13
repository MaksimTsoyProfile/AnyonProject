import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChannelsView from './ChannelsView';
import ChatView from './ChatView';

const App = () => (
  <Container>
    <Row>
      <Col sm={3}><ChannelsView /></Col>
      <Col sm={9}><ChatView /></Col>
    </Row>
  </Container>
);

export default App;
