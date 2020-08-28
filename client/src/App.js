import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, useLocation, Route, Link } from "react-router-dom";
import './App.css';
// import CompleteNavbar from './components/CompleteNavbar';
import FoH from './routes/foh'
import Login from './routes/login'

function App() {
  return (
    <Router>
      <div>
        <Link to="/FoH">Front of House</Link>

        <Switch>
          <Route exact path="/">
            <Login />
          </Route> 
          <Route path="/FoH">
            <FoH />
          </Route>
          <Route path="/dashboard">
          </Route>
        </Switch>
      </div>
    </Router>

  );



}

export default App;
