import React, { useState, Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';


function CompleteNavbar({ enableMenu }) { 

  return (
    <Row>
      <Col xs={1}></Col>
      <Col>
        <Button Button variant="outline-success" onClick={() => enableMenu("Appetizers")}> Appetizers </Button>
      </Col>
      <Col>
        <Button variant="outline-success" onClick={() => enableMenu("Main")} > Main </Button>
      </Col>
      <Col>
        <Button variant="outline-success" onClick={() => enableMenu("Sides")} >Sides</Button>
      </Col>
      <Col>
        <Button variant="outline-success" onClick={() => enableMenu("Drinks")} >Drinks</Button>
      </Col>
    </Row>
  )
}

export default CompleteNavbar;
