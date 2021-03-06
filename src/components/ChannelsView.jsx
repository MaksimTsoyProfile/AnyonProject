import React from 'react';
import {
  ListGroup, Button, Row, Col, Container,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { FaFeatherAlt, FaTrash } from 'react-icons/fa';
import AddChannelButton from './AddChannelButton';
import { setChannel, showFormRename, showFormRemove } from '../actions';

const ChannelsView = () => {
  const channels = useSelector((state) => state.server.channels);
  const dispatch = useDispatch();
  const onClick = (channelId) => () => {
    dispatch(setChannel(channelId));
  };
  const onClickRemove = (channelId) => (e) => {
    e.stopPropagation();
    dispatch(showFormRemove(channelId));
  };
  const onClickRename = ({ id, name }) => (e) => {
    e.stopPropagation();
    dispatch(showFormRename({ id, name }));
  };

  return (
    <>
      <h2 className="style-current-channel">Channels:</h2>
      <ListGroup>
        {Object.values(channels).map((channel) => (
          <ListGroup.Item
            key={channel.id}
            className="style-channels"
            onClick={onClick(channel.id)}
          >
            <Container>
              { channel.removable ? (
                <Row>
                  <Col lg={6} md={12} xs={8}>
                    {channel.name}
                  </Col>
                  <Col lg={3} md={6} xs={2}>
                    <Button onClick={onClickRename({ id: channel.id, name: channel.name })} id="style-re-button">
                      <FaFeatherAlt />
                    </Button>
                  </Col>
                  <Col lg={3} md={6} xs={2}>
                    <Button onClick={onClickRemove(channel.id)} id="style-re-button">
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              ) : (
                <>
                  { channel.name }
                </>
              ) }
            </Container>
          </ListGroup.Item>
        ))}
        <AddChannelButton />
      </ListGroup>
    </>
  );
};

export default ChannelsView;
