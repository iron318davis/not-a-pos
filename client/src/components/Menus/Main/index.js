import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

function Main(props) {
    const handleClick = (item) => { props.addArrayItem(item) }

    const item = {
        name: "Main",
        cost: "77.77",
        desc: "Coming from main"
    }
    // ^ This probably needs to be an array and then do a DB call to import button names

    return (
        <>
            <Row>
                <Col>
                    <Button variant="secondary" onClick={() => { handleClick(item) }}>Main</Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={() => { handleClick(item) }}>Main</Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={() => { handleClick(item) }}>Main</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="secondary">OldMain</Button>
                </Col>
                <Col>
                    <Button variant="secondary">OldMain</Button>
                </Col>
                <Col>
                    <Button variant="secondary">OldMain</Button>
                </Col>
            </Row>
        </>
    )
}

export default Main;