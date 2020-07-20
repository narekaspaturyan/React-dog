import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/breeds"> go to breeds </Link>
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
