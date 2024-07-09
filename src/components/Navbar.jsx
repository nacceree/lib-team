import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../assets/css/navbar.css';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="sticky-top navbar-custom">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex ms-auto">
            <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/addbook" className="navbar-link-custom">Add Book</Nav.Link>
            <Nav.Link as={Link} to="/login" className="navbar-link-custom">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
