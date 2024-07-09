import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BooksData from '../books.json';

const OneBook = () => {
  const { category, bookId } = useParams();
  const book = BooksData[category].find(b => b.id === parseInt(bookId));

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={book.cover} alt={book.title} style={{ height: '500px', objectFit: 'cover' }} />
          </Card>
        </Col>
        <Col md={8}>
          <h1 className="mb-3" style={{ fontWeight: 'bold' }}>{book.title}</h1>
          <h4 className="mb-3">{book.author}</h4>
          <p className="mb-3"><strong>Description</strong></p>
          <p className="mb-4">{book.description}</p>
          <Button variant="primary">Look Inside</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OneBook;
