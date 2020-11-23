import React from 'react';
import {
  ListGroup, Button, Row, Col, Container,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { FaFeatherAlt, FaTrash } from 'react-icons/fa';
import AddChannelButton from './AddChannelButton';
import { setChannel, showModalAlert, showFormRename } from '../actions';

const ChannelsView = () => {
  const channels = useSelector((state) => state.server.channels);
  const dispatch = useDispatch();
  const onClick = (channelId) => () => {
    dispatch(setChannel(channelId));
  };
  const onClickRemove = (channelId) => (e) => {
    e.stopPropagation();
    dispatch(showModalAlert(channelId));
  };
  const onClickRename = (channelId) => (e) => {
    e.stopPropagation();
    dispatch(showFormRename(channelId));
  };

  return (
    <>
      <h2 className="style-current-channel">Channels:</h2>
      <ListGroup>
        {Object.values(channels).map((channel) => (channel.removable ? (
          <ListGroup.Item
            key={channel.id}
            className="style-channels"
            onClick={onClick(channel.id)}
          >
            <Container>
              <Row>
                <Col sm={6}>
                  {channel.name}
                </Col>
                <Col sm={3}>
                  <Button onClick={onClickRename(channel.id)} id="style-re-button">
                    <FaFeatherAlt />
                  </Button>
                </Col>
                <Col sm={3}>
                  <Button onClick={onClickRemove(channel.id)} id="style-re-button">
                    <FaTrash />
                  </Button>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        ) : (
          <ListGroup.Item
            key={channel.id}
            className="style-channels"
            onClick={onClick(channel.id)}
          >
            <Container>
              { channel.name }
            </Container>
          </ListGroup.Item>
        )))}
        <AddChannelButton />
      </ListGroup>
    </>
  );
};

export default ChannelsView;
