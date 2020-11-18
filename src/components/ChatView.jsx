import React, { useEffect, useRef } from 'react';
import { Container, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ChatView = () => {
  const messages = useSelector((state) => state.server.messages);
  const messageRef = useRef(null);
  useEffect(() => {
    messageRef.current.scrollTo(0, 99999);
  }, [messages]);
  return (
    <Container
      className="style-chat-container rounded border border-info"
      ref={messageRef}
    >
      {messages.map((message) => (
        <Alert key={message.id} variant={message.color}>
          <h6 className="style-message-username">{message.userName}</h6>
          <p>{message.text}</p>
          <h6 className="style-message-date">{message.date}</h6>
        </Alert>
      ))}
    </Container>
  );
};

export default ChatView;
