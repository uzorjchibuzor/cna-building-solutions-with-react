import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import GeneralContracting from "./GeneralContracting";
import BuildingConstruction from "./BuildingConstruction";
import CivilEngineering from "./CivilEngineering";
import PropertyDevelopment from "./PropertyDevelopment";
import DevelopmentConsultancy from "./DevelopmentConsultancy";
import Safety from "./Safety";
import SolarHub from "./SolarHub";
import NoMatch from "./NoMatch";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/general-contracting" exact component={GeneralContracting} />
            <Route path="/building-construction" exact component={BuildingConstruction} />
            <Route path="/civil-engineering" exact component={CivilEngineering} />
            <Route path="/property-development" exact component={PropertyDevelopment} />
            <Route path="/development-consultancy" exact component={DevelopmentConsultancy} />
            <Route path="/safety" exact component={Safety} />
            <Route path="/solar-hub" exact component={SolarHub} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
