import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ChatInput from './ChatInput';

const ChatView = () => (
  <Container>
    <Row
      className="container border border-secondary text-white"
      style={{ height: '50vh', backgroundColor: '#3D998A' }}
    >
      Message Text
    </Row>
    <Row>
      <ChatInput />
    </Row>
  </Container>
);

export default ChatView;
