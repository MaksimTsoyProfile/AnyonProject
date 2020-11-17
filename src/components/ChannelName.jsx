import React from 'react';
import { findKey } from 'lodash';
import { useSelector } from 'react-redux';

const ChannelName = () => {
  const currentChannelId = useSelector((state) => state.server.currentChannelId);
  const channels = useSelector((state) => state.server.channels);
  const channelName = channels[findKey(channels, { id: currentChannelId })].name;

  return (
    <div>
      <h2 className="styleCurrentChannel">
        Current channel : &quot;
        {channelName}
        &quot;
      </h2>
    </div>
  );
};

export default ChannelName;
