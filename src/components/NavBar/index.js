import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import {LinkContainer} from 'react-router-bootstrap';

function NavBar(props) {
    const {
        active,
        handleSelect
    } = props;
    
    //return JSX
    return (
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container fluid>
          <Navbar.Brand href="#home">Gustavo Muratalla</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end text-center">
            <Nav activeKey={active} onSelect={handleSelect}>
              <LinkContainer to="/about">
                <Nav.Link eventKey="1">About Me</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portfolio">
                <Nav.Link eventKey="2">Portfolio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link eventKey="3">Contact Me</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resume">
                <Nav.Link eventKey="4">Resume</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;