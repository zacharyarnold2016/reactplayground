/* eslint-disable react/prefer-stateless-function */
import React from "react";
import NavItem from "./NavItem";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavItem name="These" link="https://google.com" />
        <NavItem name="Links" link="https://google.com" />
        <NavItem name="Are" link="https://google.com" />
        <NavItem name="Google" link="https://google.com" />
      </div>
    );
  }
}

export default NavBar;
