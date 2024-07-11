import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../assets/css/navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/images/logowa.png'




const CustomNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/allbooks');
    }
  };

  return (
    <Navbar expand="lg" className="sticky-top navbar-custom">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top navbar-logo"
          />
        </Navbar.Brand>        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Add any left-aligned links here if needed */}
          </Nav>
          <div className='botona' >
            <form className="search-form mx-auto" onSubmit={handleSearch}>
              <input
                type="search"
                placeholder="Search Anything...."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search"
              />
              <button type="submit" className="search-button">
                <i className="fas fa-search"></i> Search
              </button>
            </form>
          </div>
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