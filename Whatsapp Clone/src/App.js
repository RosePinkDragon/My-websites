import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>CheckOut</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/* this is default route */}
          {/* home page */}
          <Route path="/">
            <Header />
            <Home />

          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;