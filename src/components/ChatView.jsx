import React from 'react';
import { Container } from 'react-bootstrap';
import ChatInput from './ChatInput';

const ChatView = () => (
  <div style={{ marginLeft: '40px' }}>
    <Container style={{
      border: '2px solid black', height: '300px', width: '500px',
    }}
    >
      CHAT HERE
    </Container>
    <ChatInput />
  </div>
);

export default ChatView;
