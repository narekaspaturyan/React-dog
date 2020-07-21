import React from "react";
import { Link, Redirect, NavLink } from "react-router-dom";
import propTypes from "prop-types";

let log = console.log;
const Navbar = (props) => {
  log(props);
  const { asd } = props;
  return (
    <nav className="navbar navber-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <Link to="/counters"> go to counters </Link>
      <NavLink className="nav-item nav-link" to="/breeds">
        go to breeds
      </NavLink>
    </nav>
  );
};

Navbar.propTypes = {
  asd: propTypes.func.isRequired, // checking types with prop-types
};

// Navbar.defaultProps = {
//   dsa: "asdasdasd",       //  creating defaultProps
// };

export default Navbar;
