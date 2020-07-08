import React from 'react';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './App.css';

import { RootProvider } from "./context/rootContext";
import ThemeWrapper from "./components/ThemeWrapper";

import Header from './components/Header';

import Login from "./components/Login";
import Register from "./components/Register";

import Shop from './components/Shop';
import Cart from './components/Cart';

const App = () => (
  <ThemeWrapper>
    <RootProvider>
      <Router>
        <Header />
        <Switch>
            <Route path="/shop" component={Shop} />
            <Route path="/shop/cart" component={Card} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </RootProvider>
  </ThemeWrapper>
  );

export default App;
