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
        // This shows the menu options when you click a "Menu Group"
        // enableMenu gets menu from CompleteNavbar buttons
    function enableMenu(menu) {
        if (menu === "Sides") {
            disableAll();
            setToggleSides({ display: "inline-block" });
            console.log({ toggleSides })
        } else 
        if (menu === "Appetizers") {
            disableAll();
            setToggleAppetizers({ display: "inline-block" });
            console.log({ toggleAppetizers })

        }
        else if (menu === "Main") {
            disableAll();
            setToggleMain({ display: "inline-block" });
            console.log({ toggleMain })
        } else if (menu === "Drinks") {
            disableAll();
            setToggleDrinks({ display: "inline-block" });
            console.log({ toggleDrinks })
        }
    }






    const [orderState, setOrder] = useState({
        // This will hold the clicked order items
        Order: [],
    });

    const addToArray = (inputObject) => {
        let foodItem = {
            name: inputObject.name,
            cost: inputObject.cost,
            desc: inputObject.desc
        };

        // Look into .concat vs .push for Stateful components
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
        setOrder({ Order: [...orderState.Order.concat(foodItem)] })
    };







 
    return (
        <div>
            <CompleteNavbar enableMenu={enableMenu} />
            <Row>
                <Col xs={1}></Col>
                <Col xs={6} >
                    <Card style={toggleSides}>
                        <Sides addArrayItem={addToArray} />
                    </Card>
                    <Card style={toggleAppetizers}>
                        <Appetizers addArrayItem={addToArray} />
                    </Card>
                    <Card style={toggleMain}>
                        <Main addArrayItem={addToArray} />
                    </Card>
                    <Card style={toggleDrinks}>
                        <Drinks addArrayItem={addToArray} />
                    </Card>
                </Col>
                <Col xs={1}></Col>
                <Col xs={3}> 
                    <Card>
                        <table>
                            {orderState.Order.map(row => (
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
                            ))}
                        </table>
                    </Card>
                </Col>
            </Row>


        </div> 
    )
}

export default FoH;