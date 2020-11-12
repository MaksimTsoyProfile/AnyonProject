import React from 'react';
import { Container } from 'react-bootstrap';
import ChatInput from './ChatInput';

const ChatView = () => (
  <Container>
    <div
      className="container border border-secondary text-white"
      style={{ height: '50vh', backgroundColor: '#3D998A' }}
    >
      Message Text
    </div>
    <ChatInput />
  </Container>
);

export default ChatView;
