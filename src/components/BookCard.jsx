import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BookCard = ({ category, book }) => (
  <Card className="h-100 shadow-sm" style={{ transition: 'all 0.3s ease' }}>
    <Card.Img 
      variant="top" 
      src={book.cover} 
      alt={book.title} 
      style={{ height: '350px', objectFit: 'obtain' }} 
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="font-weight-bold">{book.title}</Card.Title>
      <Card.Text className="text-muted mb-auto">Author: {book.author}</Card.Text>
      <Link to={`/allbooks/${category}/${book.id}`} className="btn btn-primary mt-3" style={{ backgroundColor: '#E74C3C', borderColor: '#E74C3C' }}>
        View Details
      </Link>
    </Card.Body>
  </Card>
);

export default BookCard;