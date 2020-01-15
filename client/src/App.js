import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import MenuBar from "./components/Menubar";

import { Container } from 'semantic-ui-react'

function App() {
  return (
    <Router>
      <Container>
      <MenuBar />
      <Route exact path="/" component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      </Container>
    </Router>
  );
}

export default App;