import React from "react";
import "./App.css";
import ThemeWrapper from "./components/ThemeWrapper";
import { RootProvider } from "./context/rootContext";
import Login from "./components/Login";

const App = () => (
  <div className="App">
    <ThemeWrapper>
      <RootProvider>
        <Login />
      </RootProvider>
    </ThemeWrapper>
  </div>
);

export default App;
