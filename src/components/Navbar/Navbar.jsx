import React from "react";
import { Link } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import { Nav, NavLink } from "./Style";

function Navbar() {
  return (
    <Nav>
      <Link to='/'>
        VV
      </Link>
      <div>
        <NavLink
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
        >
          Projects
        </NavLink>
      </div>
      <div>
        <Contacts />
      </div>
    </Nav>
  );
}

export default Navbar;