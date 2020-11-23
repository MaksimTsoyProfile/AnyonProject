import React from 'react';
import { useSelector } from 'react-redux';

const ChannelName = () => {
  const currentChannelId = useSelector((state) => state.server.currentChannelId);
  const channels = useSelector((state) => state.server.channels);
  const channelName = channels[currentChannelId].name;

  return (
    <>
      <h2 className="style-current-channel">
        Current channel : &quot;
        {channelName}
        &quot;
      </h2>
    </>
  );
};

export default ChannelName;
