import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../assest/logo.webp";
class navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark">
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              style={{ height: "40px", width: "40px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="./dashboard" style={{ color: "white" }}>
                Dashboard
              </Nav.Link>

              <Nav.Link eventKey={2} href="./Login" style={{ color: "white" }}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default navigation;
