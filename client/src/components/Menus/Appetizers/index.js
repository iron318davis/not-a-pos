import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './style.css';

function Appetizers(props) {
    const handleClick = (item) => { props.addArrayItem(item) }

    const item = {
        name: "Nachos",
        cost: "3.55",
        desc: "Coming from Appetizers/index.js"
    }
    // ^ This probably needs to be an array and then do a DB call to import button names

    return (
        <>
            <Row >
                <Col>
                    <Button className= "Appetizers-row-button" variant="secondary" onClick={() => { handleClick(item) }}>Nachos</Button>
                </Col>
            </Row>
        </>
    )
}

export default Appetizers;