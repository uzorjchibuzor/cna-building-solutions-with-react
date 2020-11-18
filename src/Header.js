import React from "react";
import { Link, Route } from "react-router-dom";

export default () => {
  return (
    <Route>
      <header>
        <div className="navbar nav-background navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/">
                <img
                  src={process.env.PUBLIC_URL + " new-logo.png"}
                  alt="logo"
                  className="logo"
                />
              </Link>
              <button
                type="button"
                className="navbar-toggle toggler"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/" rel="noopener noreferrer">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" rel="noopener noreferrer">
                    About
                  </Link>
                </li>
                <li className="dropdown">
                  {/* eslint-disable-next-line */}
                  <a
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    rel="noopener noreferrer"
                  >
                    What We Do
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="/general-contracting" className="dropdown-item">
                      General Contracting
                    </Link>
                    <hr />
                    <Link to="/building-construction" className="dropdown-item">
                      Building Construction
                    </Link>

                    <hr />
                    <Link to="/civil-engineering" className="dropdown-item">
                      Civil Engineering
                    </Link>

                    <hr />
                    <Link
                      to="/property-development"
                      className="dropdown-item"
                      rel="noopener noreferrer"
                    >
                      Property Development
                    </Link>
                    <hr />
                    <Link
                      to="/development-consultancy"
                      className="dropdown-item"
                      rel="noopener noreferrer"
                    >
                      Development Consultancy
                    </Link>
                  </div>
                </li>
                <li>
                  <Link to="/safety">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link to="/solar-hub">
                    Solar Hub
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </Route>
  );
};
