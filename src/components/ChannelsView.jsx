import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ChannelsView = () => {
  const channels = useSelector((state) => state.channels);
  return (
    <ListGroup>
      {channels.map((channel) => (
        <ListGroup.Item
          key={channel.id}
          style={{
            backgroundColor: '#186DB6', fontSize: '20px', color: 'white', borderColor: 'white',
          }}
        >
          {channel.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ChannelsView;
