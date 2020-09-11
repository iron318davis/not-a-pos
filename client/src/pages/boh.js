import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import './style.css';




function BoH() {


    return (
        <div>
            <Row>
                <Col xs={1}></Col>
                <Col>
                <Card>
                    <Table striped bordered hover>
                        {/* {orderState.Order.map(row => (
                                <tbody>
                                    <tr>
                                        <td>
                                            {row.name}
                                        </td>
                                        <td>
                                            {row.desc}
                                        </td>
                                        <td>
                                            {row.cost}
                                        </td>
                                    </tr>
                                </tbody>
                            ))} */}
                        <tr>
                            <td>Box1Test</td>
                            <td>Need to pull in Order data here</td>
                        </tr>
                    </Table>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={1}></Col>
                <Col xs={4}>
                    <Button className ='Pre-Order' variant="success">Previous Order</Button>
                </Col>
                <Col xs={4}>
                    <Button className = 'cpm-Order' variant="success">Complete Order</Button>
                </Col>
                <Col xs={3}>
                    <Button className = 'Nxt-Order'variant="success">Next Order</Button>
                </Col>
            </Row>

        </div>


    )
}

export default BoH;