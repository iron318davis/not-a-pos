import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CompleteNavbar from './../components/CompleteNavbar';
import Appetizers from './../components/Menus/Appetizers';
import Sides from './../components/Menus/Sides';
import Main from './../components/Menus/Main';
import Drinks from './../components/Menus/Drinks';
import { Row, Col, Card } from 'react-bootstrap';


function FoH() {

    const [toggleSides, setToggleSides] = useState({
        display: "none"
    });
    const [toggleAppetizers, setToggleAppetizers] = useState({
        display: "none"
    });
    const [toggleMain, setToggleMain] = useState({
        display: "none"
    });
    const [toggleDrinks, setToggleDrinks] = useState({
        display: "none"
    });

    function disableAll() {
        setToggleSides({ display: "none" });
        setToggleAppetizers({ display: "none" })
        setToggleMain({ display: "none" })
        setToggleDrinks({ display: "none" })
    }

    function enableMenu(menu) {
        if (menu === "Sides") {
            disableAll();
            setToggleSides({ display: "inline-block" });
            console.log({ toggleSides })
        } else if (menu === "Appetizers") {
            disableAll();
            setToggleAppetizers({ display: "inline-block" });
            console.log({ toggleAppetizers })
        } else if (menu === "Main") {
            disableAll();
            setToggleMain({ display: "inline-block" });
            console.log({ toggleMain })
        } else if (menu === "Drinks") {
            disableAll();
            setToggleDrinks({ display: "inline-block" });
            console.log({ toggleDrinks })
        }
    }

    return (
        <div>
            <CompleteNavbar enableMenu={enableMenu} />
            <Row>
                <Col xs={1}></Col>
                <Col xs={6} >
                    <Card style={toggleSides}>
                        <Sides />
                    </Card>
                    <Card style={toggleAppetizers}>
                        <Appetizers />
                    </Card>
                    <Card style={toggleMain}>
                        <Main />
                    </Card>
                    <Card style={toggleDrinks}>
                        <Drinks />
                    </Card>
                </Col>
                <Col xs={1}></Col>
                <Col xs={3}>
                    <Card>
                        Actual order goes here
                    </Card>
                </Col>
            </Row>


        </div>
    )
}

export default FoH;