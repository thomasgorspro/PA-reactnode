import React from 'react';
import logo from './logo.svg';
import './App.css';

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
