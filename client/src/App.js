import React from 'react';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
// import CompleteNavbar from './components/CompleteNavbar';
import FoH from './pages/foh'
import BoH from './pages/boh'
import Management from './pages/management'
import FohBohMan from './pages/FoHBoHMan'
import Login from './pages/login'

function App() {
  return (
    <Router>
      <div>
        <Link to="/FoH">Front of House</Link> <br></br>
        <Link to="/BoH">Back of House</Link>

        <Switch>
          <Route exact path="/">
            <Login />
          </Route> 
          <Route path="/FoHBoHMan">
            <FohBohMan />
          </Route>
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
    </Router>

  );



}

export default App;
