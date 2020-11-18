import React, { useContext } from 'react';
import { Row, Container } from 'react-bootstrap';
import UserDataContext from './Context';

const NameView = () => {
  const [userName] = useContext(UserDataContext);
  return (
    <Container>
      <Row className="style-username-view">
        Login:
        <span>
          { userName }
        </span>
      </Row>
    </Container>
  );
};

export default NameView;
