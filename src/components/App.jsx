import React from 'react';
import { ListGroup } from 'react-bootstrap';

const App = ({ channels }) => (
  <ListGroup style={{ width: '350px' }}>
    {channels.map((channel) => (
      <ListGroup.Item key={channel.id}>{channel.name}</ListGroup.Item>
    ))}
  </ListGroup>
);

export default App;
