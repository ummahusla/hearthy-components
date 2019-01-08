import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Content = ({ content, sidebar }) => (
  <Container>
    <Row>
      <Col xs="12" md="8">
        {content}
      </Col>
      <Col xs="12" md="4">
        {sidebar}
      </Col>
    </Row>
  </Container>
);

export default Content;
