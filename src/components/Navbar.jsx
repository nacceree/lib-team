import React, { useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import books from '../books'; // Importez le fichier JSON
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import './Navbar.css'; // Import the CSS file

const BookCard = ({ category, book }) => {
  return (
    <Card style={{ width: '18rem' }} className="mb-4 shadow-sm">
      {book.cover && (
        <Card.Img 
          variant="top" 
          src={book.cover} 
          alt={book.title} 
          style={{ height: '300px', objectFit: 'cover' }} 
        />
      )}
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        {book.author && <Card.Text>Author: {book.author}</Card.Text>}
        <Link to={`/allbooks/${category}/${book.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

const Header = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search', { state: { search } });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className='navbar'>
        <img src="/logo.png" alt="Logo" className='logo'/>
        <div className='search-box'>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <img
            src="/icon_search.png"
            alt="Search Icon"
            className='search-icon'
            onClick={handleSearch}
          />
        </div>
        <IoSettingsOutline className='r-icon' />
        <IoMdContact className='r-icon2' />
      </div>
    
      <Container >
        {/* Your existing content here, if necessary */}
      </Container>
    </>
  );
//___________________
};

export default Header;
