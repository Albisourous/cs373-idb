import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "../App.css";

export const NavBar = () => (
  <Navbar className="navbar" expand="lg">
    <Navbar.Brand href="/">
      <i className="fa fa-plane">
        <span className="title"> AeroInfo</span>
      </i>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link className="link" href="/">
          {" "}
          Home{" "}
        </Nav.Link>
        <Nav.Link className="link" href="/aircrafts">
          {" "}
          Aircrafts{" "}
        </Nav.Link>
        <Nav.Link className="link" href="/airlines">
          {" "}
          Airlines{" "}
        </Nav.Link>
        <Nav.Link className="link" href="/airports">
          {" "}
          Airports{" "}
        </Nav.Link>
        <Nav.Link className="link" href="/about">
          {" "}
          About{" "}
        </Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar.Collapse>
    
  </Navbar>
);