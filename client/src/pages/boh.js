import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';





function BoH() {


    return (
        <div>
            <Row>
                <Col xs={1}></Col>
                <Col>
                <Card>
                    <table>
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
                    </table>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={1}></Col>
                <Col xs={4}>
                    <Button variant="success">Previous Order</Button>
                </Col>
                <Col xs={4}>
                    <Button variant="success">Complete Order</Button>
                </Col>
                <Col xs={3}>
                    <Button variant="success">Next Order</Button>
                </Col>
            </Row>

        </div>


    )
}

export default BoH;