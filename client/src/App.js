import React from "react";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ThemeWrapper from "./components/ThemeWrapper";
import { RootProvider } from "./context/rootContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";

const App = () => (
  <ThemeWrapper>
    <RootProvider>
      <Router>
        <Route path="/" component={Header} />
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </RootProvider>
  </ThemeWrapper>
);

export default App;
