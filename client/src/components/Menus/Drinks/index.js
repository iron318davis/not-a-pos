import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

function Drinks(props) {
    const handleClick = (item) => { props.addArrayItem(item) }

    const item = {
        name: "Drink",
        cost: "3.50",
        desc: "Coming from Drinks"
    }
    // ^ This probably needs to be an array and then do a DB call to import button names

    return (
        <>
            <Row>
                <Col>
                    <Button variant="secondary" onClick={() => { handleClick(item) }}>Drinks</Button>
                </Col>
            </Row>
        </>
    )
}

export default Drinks;