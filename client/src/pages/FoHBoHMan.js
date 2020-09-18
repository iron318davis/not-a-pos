// This page will have a selection option for Front of House, Back of House, or Management page.
// Haven't worked out how this will work yet.
import React from 'react';
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
// import './App.css';
import FoH from './foh'
import BoH from './boh'
import Management from './management'


function FoHBoHMan () {
    return (
    <div>
    <Link to="/FoH">Front of House</Link> <br></br>
    <Link to="/BoH">Back of House</Link> <br></br>
    <Link to="/Management">Management</Link>

    <Switch>
    <Route path="/FoH">
    <FoH />
        </Route>
        <Route path="/BoH">
    <BoH />
        </Route>
        <Route path="/Management">
    <Management />
    </Route>
    </Switch>
    </div>
    )
}

export default FoHBoHMan;