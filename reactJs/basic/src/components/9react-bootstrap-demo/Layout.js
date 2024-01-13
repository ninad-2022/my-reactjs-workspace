import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Layout = () => {
  return (
    <>
      <h2>Layour in react Bootstrap</h2>
      <Container>
        <Row>
          <Col className="bg-primary">First-Column</Col>
          <Col className="bg-secondary">Second-Column</Col>
          <Col className="bg-danger">Third-Column</Col>
          <Col className="bg-warning">Fourth-Column</Col>
        </Row>
      </Container>
      <hr />
      <Container fluid>
        <Row>
          <Col xs={12} sm={6} md={3} className="bg-primary">
            First-Column
          </Col>
          <Col xs={12} sm={6} md={3} className="bg-secondary">
            Second-Column
          </Col>
          <Col xs={12} sm={6} md={3} className="bg-danger">
            Third-Column
          </Col>
          <Col xs={12} sm={6} md={3} className="bg-warning">
            Fourth-Column
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
