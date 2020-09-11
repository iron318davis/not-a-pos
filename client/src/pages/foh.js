import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import API from "../utils/API"
import CompleteNavbar from '../components/CompleteNavbar';
import Appetizers from '../components/Menus/Appetizers';
import Sides from '../components/Menus/Sides';
import Main from '../components/Menus/Main';
import Drinks from '../components/Menus/Drinks';
import { TestList, TestListItem } from '../components/TestList';
import { Row, Col, Card, Button,Table } from 'react-bootstrap'; 

function FoH() {
// LOADING CATEGORIES TO PUT ON PAGE =================================================================
    const [categories, setCategories] = useState({
        categories_id: "",
        category_name: ""
    })
// Load all categories and store them with setCategories
    useEffect(() => {
    loadCategories()
    }, [])
// Loads all categories and sets them to categories
    function loadCategories() {
    API.getCategories()
      .then(res => 
        setCategories(res.data)
      )
      .catch(err => console.log(err));
    };
// END LOADING CATEGORIES TO PUT ON PAGE goes to categories.length =============================================================

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




    function handleOrderSubmit(event) {
        event.preventDefault();
        API.saveOrder({
            // 
            orderID: 1,
            // 
            employeeID: 1,
            subtotal: 2.22,
            total: 2.22
        })
            .then(() => setOrder({
                Order: []
            }))
            //.then(() => loadBooks())
            .catch(err => console.log(err));
    }


 
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
                        </Table>
                        <Button variant='success' onClick={handleOrderSubmit}>Submit Order</Button>
                    {/* </Card> */}
                </Col>
            </Row>
{/* TESTING OUT CALLING TO DB AND GETTING CATEGORIES USING categories.length =======================================================*/}
{/* HAD TO CREATE FOLDER components/TestList for this to work but that folder is not needed in final product========================*/}
            <Row>
            {categories.length ? (
              <TestList>
                {categories.map(category => {
                  return (
                    <TestListItem>
                      <a href={"/categories/" + category.id}>
                        <strong>
                          Category ID = {category.id} Category Name = {category.category_name}
                        </strong>
                      </a>
                    </TestListItem>
                  );
                })}
              </TestList>
            ) : (
              <h3>Categories.Length No Results to Display</h3>
            )}
            </Row>
{/* END TESTING OUT CALLING TO DB AND GETTING CATEGORIES USING categories.length ================================================== */}


        </div> 
    )
}

export default FoH;
