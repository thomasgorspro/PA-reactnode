import React from "react";
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import ThemeWrapper from "./components/ThemeWrapper";
import { RootProvider } from "./context/rootContext";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => (
  <div className="App">
      <a href="/login">Login</a><br />
      <a href="/register">Register</a>
    <ThemeWrapper>
        <RootProvider>
          <Router>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Router>
      </RootProvider>
    </ThemeWrapper>
  </div>
);

export default App;
