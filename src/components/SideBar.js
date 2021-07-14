import React, { Component } from "react";
import { slide as SideNavMenu } from "react-burger-menu";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./sidebar.scss";
export default class SideNavBar extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { menuOpen: false };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  componentDidMount() {}

  render() {
    return (
      <SideNavMenu
        left
        width={"280px"}
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <div className="side-navbar-brand">
          <Link
            onClick={() => this.closeMenu()}
            to="/"
            className="primary-color"
          >
            <div>FinanceM4</div>
          </Link>
        </div>
        <div className="side-navbar-body">
          {/* <img src={Logo} className="App-logo" alt="logo" /> */}
          <Link
            onClick={() => this.closeMenu()}
            to="/"
            className="sidenav-items"
          >
            Home
          </Link>
          <Link
            onClick={() => this.closeMenu()}
            to="/"
            className="sidenav-items"
          >
            About
          </Link>
          <Link
            onClick={() => this.closeMenu()}
            to="/"
            className="sidenav-items"
          >
            Work
          </Link>
          <Link
            onClick={() => this.closeMenu()}
            to="/"
            className="sidenav-items"
          >
            Contact Me
          </Link>
        </div>
      </SideNavMenu>
    );
  }
}
//SideNavBar.contextType = AuthContext;
