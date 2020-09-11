import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './style.css';
function Sides(props) {
    const handleClick = (item) => { props.addArrayItem(item) }

    const item = {
        name: "Sides",
        cost: "1.00",
        desc: "Coming from Sides"
    }
        // ^ This probably needs to be an array and then do a DB call to import button names

        return (
            <>
                <Row>
                    <Col>
                        <Button className = 'main-buttons' variant="secondary" onClick={() => { handleClick(item) }}>Sides</Button>
                    </Col>
                    <Col>
                        <Button className = 'main-buttons' variant="secondary" onClick={() => { handleClick(item) }}>Sides</Button>
                    </Col>
                    <Col>
                        <Button className = 'main-buttons' variant="secondary" onClick={() => { handleClick(item) }}>Sides</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className = 'bottom-buttons' variant="secondary" onClick={() => { handleClick(item) }}>Sides</Button>
                    </Col>
                    <Col>
                        <Button className = 'bottom-buttons' variant="secondary" onClick={() => { handleClick(item) }}>Sides</Button>
                    </Col>
                    <Col>
                        <Button className = 'bottom-buttons' variant="secondary" onClick={() => { handleClick(item) }}>Sides</Button>
                    </Col>
                </Row>
            </>
        )
}

export default Sides;