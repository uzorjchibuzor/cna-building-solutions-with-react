import React from "react";

export default () => {
  return (
    <div className="navbar nav-background navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="/">
            <img
              src={process.env.PUBLIC_URL + " new-logo.png"}
              alt="logo"
              className="logo"
            />
          </a>
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
              {" "}
              <a href="/">Home</a>
            </li>
            <li>
              {" "}
              <a href="#">About</a>{" "}
            </li>
            <li className="dropdown">
              <a
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                What We Do
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a href="#" className="dropdown-item">
                  General Contracting
                </a>
                <hr />
                <a href="#" className="dropdown-item">
                  Bbuilding Construction
                </a>

                <hr />
                <a href="#" className="dropdown-item">
                  Civil Engineering
                </a>

                <hr />
                <a href="#" className="dropdown-item">
                  Property Development
                </a>
                <hr />
                <a href="#" className="dropdown-item">
                  Development Consultancy
                </a>
              </div>
            </li>
            <li>
              {" "}
              <a href="#" className="dropdown-item">
                Safety
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item">
                Solar Hub
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className="dropdown-item">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
