import React from "react";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ThemeWrapper from "./components/ThemeWrapper";
import { RootProvider } from "./context/rootContext";
import Header from "./components/Header";

import { Register as MerchantRegister } from "./components/Register/Merchant";
import { Register as UserRegister} from "./components/Register/User";

import Login from "./components/Login";
import Profile from "./components/Profile";
import { Merchant as MerchantBackOffice  } from "./components/BackOffice/Merchant";

const App = () => (
  <ThemeWrapper>
    <RootProvider>
      <Router>
        <Route path="/" component={Header} />
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/user/register" component={UserRegister} />
            <Route path="/merchant/register" component={MerchantRegister} />
            <Route path="/merchant/backoffice" component={MerchantBackOffice} />
        </Switch>
      </Router>
    </RootProvider>
  </ThemeWrapper>
);

export default App;
