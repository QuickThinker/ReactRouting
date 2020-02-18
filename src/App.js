import React from 'react';

import './App.css';

import Home from "./components/home/home";
import Data from "./components/data/data";
import Nero from "./components/nero/nero";
import Block1Color from "./components/block1/block1";
import Block2Color from "./components/block2/block2";
import Block3Color from "./components/block3/block3";


import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink exact to={"/"}> Home </NavLink>
          <NavLink to={"/data/0"}> Data </NavLink>
          <NavLink to={"/nero"}> Cool thing </NavLink>
        </nav>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/data/:id"} component={Data}/>
          <Route path={"/nero"} component={Nero}/>
          <Route path={"/block1"} component={Block1Color}/>
          <Route path={"/block2"} component={Block2Color}/>
          <Route path={"/block3"} component={Block3Color}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


