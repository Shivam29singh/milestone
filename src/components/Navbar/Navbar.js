import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../assest/logo.webp";
class navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="right">
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
            {/* <Nav.Link href="#deets">Dashboard</Nav.Link> */}
            {/* <Nav.Link href="./MyProfile">Product</Nav.Link> */}
            <Nav.Link eventKey={2} href="./Login">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default navigation;
