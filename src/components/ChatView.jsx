import React, { useEffect, useRef } from 'react';
import { Container, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ChatView = () => {
  const messages = useSelector((state) => state.server.messages);
  const messageRef = useRef(null);
  console.log(messages);
  useEffect(() => {
    messageRef.current.scrollTo(0, 99999);
  }, [messages]);
  return (
    <Container
      className="container border border-secondary"
      style={{ height: '50vh', backgroundColor: 'white', overflow: 'auto' }}
      ref={messageRef}
    >
      {messages.map((message) => (
        <Alert key={message.id} variant={message.color}>
          <h6 style={{ fontSize: '10px', color: 'grey' }}>{message.userName}</h6>
          <p>{message.text}</p>
          <h6 style={{ fontSize: '8px', color: 'grey' }}>{message.date}</h6>
        </Alert>
      ))}
    </Container>
  );
};

export default ChatView;
