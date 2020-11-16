import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ButtonAddChannel from './ButtonAddChannel';

const ChannelsView = () => {
  const channels = useSelector((state) => state.server.channels);
  return (
    <ListGroup>
      {channels.map((channel) => (
        <ListGroup.Item
          key={channel.id}
          style={{
            backgroundColor: '#186DB6', fontSize: '20px', color: 'white',
          }}
        >
          {channel.name}
        </ListGroup.Item>
      ))}
      <ButtonAddChannel />
    </ListGroup>
  );
};

export default ChannelsView;
