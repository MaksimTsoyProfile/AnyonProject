import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import AddChannelButton from './AddChannelButton';
import { setChannel } from '../actions';

const ChannelsView = () => {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.server.channels);
  const onClick = (channelId) => () => {
    dispatch(setChannel(channelId));
  };
  return (
    <>
      <h2 className="style-current-channel">Channels:</h2>
      <ListGroup>
        {channels.map((channel) => (
          <ListGroup.Item
            key={channel.id}
            className="style-channels"
            onClick={onClick(channel.id)}
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
