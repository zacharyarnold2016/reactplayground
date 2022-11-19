/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { PureComponent } from "react";

class NavItem extends PureComponent {
  render() {
    return <a href={this.props.link} target="_blanke">{this.props.name}</a>;
  }
}

export default NavItem;
