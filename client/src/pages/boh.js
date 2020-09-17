import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import './style.css';
import API from "../utils/API";






function BoH() {

    let [serverreturned, setserverreturned] = useState({
        DatabaseOrderItems: []
    });

    useEffect(() => {
        const interval = setInterval(() => {
            API.getToCookOrders()
                .then((res) => { console.log('BOH LOGGING', res); setserverreturned({ DatabaseOrderItems: res.data[0] }); console.log('MORE LOGGING' + res.data[0][0].itemName) })
            // res.data[0] is an array of all order items rows in database ie
            // 0: {orderID: 1, employeeID: 1, orderDtTm: "2020-09-17T20:58:29.000Z", subtotal: "5.99", total: "0", …}
            // 1: {orderID: 2, employeeID: 1, orderDtTm: "2020-09-17T20:58:29.000Z", subtotal: "6.99", total: "0", …}
            // 2: {orderID: 3, employeeID: 1, orderDtTm: "2020-09-17T20:58:29.000Z", subtotal: "7.99", total: "0", …}

            // res console log json.stringify is 
            // MORE LOGGING{"data":[
            // [{"orderID":1,"employeeID":1,"orderDtTm":"2020-09-17T21:26:32.000Z","subtotal":"4.99","total":"0","ordercooked":0,"actualorderID":0,"itemName":"Fries","createdAt":"2020-09-17T21:26:32.000Z","updatedAt":"2020-09-17T21:26:32.000Z","employee_id":null},
            // {"orderID":2,"employeeID":1,"orderDtTm":"2020-09-17T21:26:32.000Z","subtotal":"5.99","total":"0","ordercooked":0,"actualorderID":0,"itemName":"Onion Rings","createdAt":"2020-09-17T21:26:32.000Z","updatedAt":"2020-09-17T21:26:32.000Z","employee_id":null},
            // {"orderID":3,"employeeID":1,"orderDtTm":"2020-09-17T21:26:32.000Z","subtotal":"6.99","total":"0","ordercooked":0,"actualorderID":0,"itemName":"Cheese Curds","createdAt":"2020-09-17T21:26:32.000Z","updatedAt":"2020-09-17T21:26:32.000Z","employee_id":null}],

            // [{"orderID":1,"employeeID":1,"orderDtTm":"2020-09-17T21:26:32.000Z","subtotal":"4.99","total":"0","ordercooked":0,"actualorderID":0,"itemName":"Fries","createdAt":"2020-09-17T21:26:32.000Z","updatedAt":"2020-09-17T21:26:32.000Z","employee_id":null},
            // {"orderID":2,"employeeID":1,"orderDtTm":"2020-09-17T21:26:32.000Z","subtotal":"5.99","total":"0","ordercooked":0,"actualorderID":0,"itemName":"Onion Rings","createdAt":"2020-09-17T21:26:32.000Z","updatedAt":"2020-09-17T21:26:32.000Z","employee_id":null},
            // {"orderID":3,"employeeID":1,"orderDtTm":"2020-09-17T21:26:32.000Z","subtotal":"6.99","total":"0","ordercooked":0,"actualorderID":0,"itemName":"Cheese Curds","createdAt":"2020-09-17T21:26:32.000Z","updatedAt":"2020-09-17T21:26:32.000Z","employee_id":null}]
            // ], REST OF RES is here but is unimportant

            // console logging json.stringify(res.data[0]) returns
            // MORE LOGGING
            // [
            // {"orderID":1,"employeeID":1,"orderDtTm":"2020-09-17T21:42:37.000Z","subtotal":"4.99","total":"0","ordercooked":0,"actualorderID":0,"itemName":"Fries","createdAt":"2020-09-17T21:42:37.000Z","updatedAt":"2020-09-17T21:42:37.000Z","employee_id":null},
            // {"orderID":2,"employeeID":1,"orderDtTm":"2020-09-17T21:42:37.000Z","subtotal":"5.99","total":"0","ordercooked":0,"actualorderID":0,"itemName":"Onion Rings","createdAt":"2020-09-17T21:42:37.000Z","updatedAt":"2020-09-17T21:42:37.000Z","employee_id":null},
            // {"orderID":3,"employeeID":1,"orderDtTm":"2020-09-17T21:42:37.000Z","subtotal":"6.99","total":"0","ordercooked":0,"actualorderID":0,"itemName":"Cheese Curds","createdAt":"2020-09-17T21:42:37.000Z","updatedAt":"2020-09-17T21:42:37.000Z","employee_id":null}
            // ]
        }, 10000)
        return () => clearInterval(interval);
    }, [])

    function handleOrderComplete() {
        API.completeOrder({
            
            
            
        })
    };

    return (
        <div>
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <Card>
                        <Table striped bordered hover>
                            <thead>
                                <tr>

                                    <th>Order Number</th>
                                    <th>Order Item Name</th>

                                </tr>
                            </thead>
                            {serverreturned.DatabaseOrderItems.map(row => (
                                <tbody>
                                    <tr>
                                        <td>
                                            {row.actualorderID}
                                        </td>
                                        <td>
                                            {row.itemName}
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={1}></Col>
                <Col xs={4}>
                    <Button className='Pre-Order' variant="success">Previous Order</Button>
                </Col>
                <Col xs={4}>
                    <Button className='cpm-Order' variant="success" onClick={handleOrderComplete}>Complete Order</Button>
                </Col>
                <Col xs={3}>
                    <Button className='Nxt-Order' variant="success">Next Order</Button>
                </Col>
            </Row>

        </div>


    )
}

export default BoH;