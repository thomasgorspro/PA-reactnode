import React from "react";
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import ThemeWrapper from "./components/ThemeWrapper";
import { RootProvider } from "./context/rootContext";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => (
  <div>
      <a href="/login">Login</a><br />
      <a href="/register">Register</a>
  <Router>
    <Switch>
      <Route path="/login">
        <ThemeWrapper>
          <RootProvider>
            <Login />
          </RootProvider>
        </ThemeWrapper>
      </Route>

      <Route path="/register">
        <ThemeWrapper>
          <RootProvider>
            <Register />
          </RootProvider>
        </ThemeWrapper>
      </Route>
    </Switch>
  </Router>
  </div>
);

export default App;
