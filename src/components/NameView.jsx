import React, { useContext } from 'react';
import { Row, Container } from 'react-bootstrap';
import UserNameContext from './Context';

const NameView = () => {
  const userName = useContext(UserNameContext);
  return (
    <Container>
      <Row style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Login:
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#186DB6' }}>
          { userName }
        </span>
      </Row>
    </Container>
  );
};

export default NameView;
