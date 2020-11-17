import React, { useContext } from 'react';
import { Row, Container } from 'react-bootstrap';
import UserDataContext from './Context';

const NameView = () => {
  const userData = useContext(UserDataContext);
  const [userName] = userData;
  return (
    <Container>
      <Row className="styleUsernameView">
        Login:
        <span>
          { userName }
        </span>
      </Row>
    </Container>
  );
};

export default NameView;
