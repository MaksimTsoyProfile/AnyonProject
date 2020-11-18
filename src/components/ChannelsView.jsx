import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AddChannelButton from './AddChannelButton';

const ChannelsView = () => {
  const channels = useSelector((state) => state.server.channels);
  return (
    <>
      <h2 className="style-current-channel">Channels:</h2>
      <ListGroup>
        {channels.map((channel) => (
          <ListGroup.Item
            key={channel.id}
            className="style-channels"
          >
            {channel.name}
          </ListGroup.Item>
        ))}
        <AddChannelButton />
      </ListGroup>
    </>
  );
};

export default ChannelsView;
