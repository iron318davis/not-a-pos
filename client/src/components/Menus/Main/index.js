import React, { useState, useEffect }from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import API from '../../../utils/API';
import './style.css';


function Dessert(props) {
    const handleClick = (item) => { props.addArrayItem(item) }

// LOADING CATEGORYITEMS TO PUT IN CATEGORIES =====================================================================================
const [categoryitems, setCategoryItems] = useState({
    menu_id: "",
    itemName: "",
    categoryID: "",
    price: "",
    item_description: ""
})
// Load all CATEGORYITEMS and store them with setMenuItems
useEffect(() => {
    console.log("Console logging our Appetizers Props.Key = " + props.notAKey)
    loadCategoryItems(props.notAKey)
}, [])
// Loads all CATEGORYITEMS and sets them to menuitems
function loadCategoryItems(key) {
API.getCategoryItems(key)
  .then(res => {
    console.log(res.data);
    setCategoryItems(categoryitems.test = res.data);
  })
  .catch(err => console.log(err));
};
// END LOADING CATEGORYITEMS TO PUT IN CATEGORIES goes to categories.length =============================================================


// OLD STATIC ITEM TO ADD TO ORDER WINDOW ============================================================================
    const item = {
        name: "DessertStatic",
        cost: "3.55",
        desc: "Coming from Drinks/index.js"
    }
// END OLD STATIC ITEM TO ADD TO ORDER WINDOW ========================================================================
// DYNAMIC ITME TO ADD TO ORDER WINDOW ===============================================================================
    // const item = {
    //     // Needs to be MENUS table item pulled in here
    // }
    

// END DYNAMIC ITME TO ADD TO ORDER WINDOW ===========================================================================

    return (
        <>
            <Row >
            {categoryitems.length ? (
                categoryitems.map(row => {
                    const items = {
                        itemName: row.itemName,
                        item_description: row.item_description,
                        price: row.price,
                        menu_id: row.menu_id,
                        categoryID: row.categoryID
                    }
                    return (
                <Col>
                    <Button className="Mains-row-button" variant="secondary" onClick={() => { handleClick(items) }} >{row.itemName}</Button>
                </Col>
                );
                    })
                ) : (
                <h3>Categoryitems.Length No Results to Display</h3>
                )}
            </Row>
        </>
    )
}

export default Dessert;