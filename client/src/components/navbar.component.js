import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="top__nav main-navigation">
        <div className="inside__menu">
          <Link to="/chi-siamo">chi siamo</Link>
          <Link to="/servizi">servizi</Link>
          <Link to="/" className="logo">
            ctmedia
          </Link>
          <Link to="/portfolio">portfolio</Link>
          <Link to="/contattaci">contattaci</Link>
        </div>
      </nav>
    );
  }
}
