import React from "react";
import { Container, Navbar, Nav, } from "react-bootstrap";

class CustomNav extends React.Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Hubify Smart Home</Navbar.Brand>

          <Navbar.Collapse className="mr-auto justify-content-end">
            <Nav.Link href="#Modes">Modes</Nav.Link>
            <Nav.Link href="#Rooms">Rooms</Nav.Link>
            <Nav.Link href="#Routines">Routines</Nav.Link>
            <Nav.Link href="#Recently_Viewed">Recently viewed</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default CustomNav;
