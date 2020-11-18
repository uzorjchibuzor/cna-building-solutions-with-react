import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home";
import About from "./About"
export default class App extends Component {
  render() {
    return ( <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Home} />} />
          <Route path="/about-us" component={Home} />} />
        </Switch>
      </Router>
      <Footer />
      </div>
    );
  }
}
