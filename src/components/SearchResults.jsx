import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

import books from '../books'; // Importez le fichier JSON
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = location.state && location.state.search;

  if (!searchQuery) {
    return (
      <Container style={{ padding: '5%' }}>
        <h3>No search query found!</h3>
      </Container>
    );
  }

  const filteredBooks = {};
  Object.keys(books).forEach((category) => {
    filteredBooks[category] = books[category].filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const noResults = Object.keys(filteredBooks).every(category => filteredBooks[category].length === 0);

  return (
    <>
    {/* <Container style={{ padding: '5%' }}>
        

      {Object.keys(filteredBooks).map((category) => (
        <div key={category}>
          <Row>
            {filteredBooks[category].map((book) => (
              <Col key={book.id} md={3} className="d-flex align-items-stretch mb-4">
                <BookCard category={category} book={book} />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container> */}
        <Container style={{ padding: '5%' }}>
      {noResults ? (
        <h3>No results found for "{searchQuery}"</h3>
      ) : (
        Object.keys(filteredBooks).map((category) => (
          <div key={category}>
            <Row>
              {filteredBooks[category].map((book) => (
                <Col key={book.id} md={3} className="d-flex align-items-stretch mb-4">
                  <BookCard category={category} book={book} />
                </Col>
              ))}
            </Row>
          </div>
        ))
      )}
    </Container>
    </>
  );
};

//________
export default SearchResults;
