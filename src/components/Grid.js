import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Grid(props) {
    const {children} = props
  return (
    <Container fluid>
    <Row>
      <Col></Col>
      <Col>{children}</Col>
      <Col></Col>
    </Row>
  </Container>
  )
}
