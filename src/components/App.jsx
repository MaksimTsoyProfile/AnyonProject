import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ChannelsView from './ChannelsView';
import ChatView from './ChatView';

const App = ({ channels }) => (
  <Container>
    <Row>
      <ChannelsView channels={channels} />
      <ChatView />
    </Row>
  </Container>
);

export default App;
