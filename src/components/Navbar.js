import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>{" "}
      | <NavLink to="/courses">Courses</NavLink> |{" "}
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
