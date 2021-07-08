import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Error from "./Components/Error/Error";
import Login from "./Components/Login/Login";
import Map from "./Components/Map/Map";

function App() {
  return (
    
      <Router className="App">
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/map">
            <Map></Map>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
