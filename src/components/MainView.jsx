import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChatInput from './ChatInput';
import NameView from './NameView';
import ChannelName from './ChannelName';
import ChatView from './ChatView';
import AlertError from './AlertError';

const MainView = () => (
  <Container className="p-0">
    <Row>
      <Col>
        <AlertError />
      </Col>
    </Row>
    <Row>
      <Col>
        <ChannelName />
      </Col>
    </Row>
    <Row>
      <Col>
        <ChatView />
      </Col>
    </Row>
    <Row>
      <Col>
        <NameView />
      </Col>
    </Row>
    <Row>
      <Col>
        <ChatInput />
      </Col>
    </Row>
  </Container>
);

export default MainView;
