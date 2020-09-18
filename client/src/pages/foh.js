import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import API from "../utils/API"
// import CompleteNavbar from '../components/CompleteNavbar';
import Appetizers from '../components/Menus/Appetizers';
import Sides from '../components/Menus/Sides';
import Dessert from '../components/Menus/Dessert'
import Main from '../components/Menus/Main';
import Drinks from '../components/Menus/Drinks';
import { Row, Col, Card, Button,Table } from 'react-bootstrap'; 
import './style.css';
function FoH() {
// LOADING CATEGORIES TO PUT ON PAGE ===========================================================================================
    const [categories, setCategories] = useState({
        id: "",
        category_name: ""
    })
// Load all categories and store them with setCategories
    useEffect(() => {
    loadCategories()
    }, [])
// Loads all categories and sets them to categories
    function loadCategories() {
    API.getCategories()
      .then((res) => {
        setCategories(res.data);
        console.log("setCategories Response Data = " + res);
      })
      .catch(err => console.log(err));
    };
// END LOADING CATEGORIES TO PUT ON PAGE goes to categories.length =============================================================

// SHOW OR HIDE CATEGORIES =====================================================================================================
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
    const [toggleDessert, setToggleDessert] = useState({
        display: "none"
    });

    function disableAll() {
        setToggleSides({ display: "none" });
        setToggleAppetizers({ display: "none" })
        setToggleMain({ display: "none" })
        setToggleDrinks({ display: "none" })
        setToggleDessert({ display: "none" })
    }
        // This shows the menu options when you click a "Menu Group"
        // enableMenu gets menu from CompleteNavbar buttons
    function enableMenu(menu) {
        console.log("test")
        console.log(menu)
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
        else if (menu === "Mains") {
            disableAll();
            setToggleMain({ display: "inline-block" });
            console.log({ toggleMain })
        } else if (menu === "Drinks") {
            disableAll();
            setToggleDrinks({ display: "inline-block" });
            console.log({ toggleDrinks })
        } else if (menu === "Dessert") {
            disableAll();
            setToggleDessert({ display: "inline-block" });
            console.log({ toggleDessert })
    }
}
// END SHOW OR HIDE CATEGORIES ==================================================================================================

    let i = 1;
    const [count, setCount] = useState(0);
    const [orderState, setOrder] = useState({
        // This will hold the clicked order items
        Order: [],
    });

    const addToArray = (inputObject) => {
        let foodItem = {
            menu_id: inputObject.menu_id,
            itemName: inputObject.itemName,
            categoryID: inputObject.categoryID,
            price: inputObject.price,
            item_description: inputObject.item_description
        };

        // Look into .concat vs .push for Stateful components
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
        setOrder({ Order: [...orderState.Order.concat(foodItem)] })
    };
    
    function handleOrderSubmit(event) {
        
        event.preventDefault();
        console.log(orderState.Order[0]);
        console.log(count);
        orderState.Order.map(thing => {console.log(thing.itemName)});
        orderState.Order.map(thing =>
        API.saveOrder({
            
            employeeID: 1,
            subtotal: thing.price,
            total: 0.00,
            ordercooked: 0,
            actualorderID: count,
            itemName: thing.itemName
            
        })
            .then(() => setOrder({
                Order: []
            }), setCount(count + 1))
            //.then(() => loadBooks())
            .catch(err => console.log(err))

        );
    }

    return (
        <div>
            <Row>
                <Col xs={1}></Col>
            {categories.length ? (
                categories.map(category => {
                    return (
                    <div>
                    <Col xs={1}>
                        {/* buttons for top row */}
                    <Button className ='aptbtn' onClick={() => enableMenu(category.category_name)}>{category.category_name}</Button>
                    </Col>
                    </div>
                    );
                })
            ) : (
              <h3>Categories.Length No Results to Display</h3>
            )}
            </Row>
        

            <Row>
                <Col xs={1}></Col>
                <Col xs={6} >
                    <Card style={toggleSides}>
                        <Sides notAKey={5} addArrayItem={addToArray} />
                    </Card>
                    <Card style={toggleAppetizers}>
                        <Appetizers notAKey={1} addArrayItem={addToArray} />
                    </Card>
                    <Card style={toggleDessert}>
                        <Dessert notAKey={3} addArrayItem={addToArray} />
                    </Card>
                    <Card style={toggleMain}>
                        <Main notAKey={2} addArrayItem={addToArray} />
                    </Card>
                    <Card style={toggleDrinks}>
                        <Drinks notAKey={4} addArrayItem={addToArray} />
                    </Card>
                </Col>
                <Col xs={1}></Col>

{/* ORDER TABLE ON FOH STARTS HERE ========================================================================= */}
                <Col xs={3}> 
                    {/* <Card> */}
                        <Table striped bordered hover>
                                <thead>
                                <tr>
                                  
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>
                            {orderState.Order.map(row => (
                                <tbody>
                                <tr>
                                    <td>
                                        {row.itemName}
                                    </td>
                                    <td>
                                        {row.item_description}
                                    </td>
                                    <td>
                                        {row.price}
                                    </td>
                                </tr>
                                </tbody>
                            ))}
                        </Table>
                        <Button variant='success' onClick={handleOrderSubmit}>Submit Order</Button>
                    {/* </Card> */}
                </Col>
{/*END ORDER TABLE ON FOH STARTS HERE ========================================================================= */}
            </Row>
        </div> 
    )
}

export default FoH;
