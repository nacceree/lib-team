import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookCard = ({ category, book }) => (
  <Card className="mb-4 shadow-sm">
    <Card.Img 
      variant="top" 
      src={book.cover} 
      alt={book.title} 
      style={{ height: '350px', objectFit: 'obtain' }} 
    />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>Author: {book.author}</Card.Text>
      <Link to={`/allbooks/${category}/${book.id}`} className="btn btn-primary">
        View Details
      </Link>
    </Card.Body>
  </Card>
);

export default BookCard;