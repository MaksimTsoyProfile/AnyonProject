import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ChatInput from './ChatInput';
import NameView from './NameView';
import ChannelName from './ChannelName';
import ChatView from './ChatView';
import AlertError from './AlertError';

const MainView = () => (
  <Container>
    <Row>
      <AlertError />
    </Row>
    <Row>
      <ChannelName />
    </Row>
    <Row>
      <ChatView />
    </Row>
    <Row>
      <NameView />
    </Row>
    <Row>
      <ChatInput />
    </Row>
  </Container>
);

export default MainView;
