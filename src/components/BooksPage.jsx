import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookCard from './BookCard';
import BooksData from '../books.json'


const BooksPage = () => {
    return (
    <Container fluid className="py-5">
        <h1 className="text-center mb-5" style={{ color: '#333', fontWeight: 'bold' }}>
          Our Book Collection
        </h1>
        <Row xs={2} sm={3} md={4} lg={6} className="g-4 mx-4">
          {Object.keys(BooksData).map((category) => (
            <React.Fragment key={category}>
              {BooksData[category].map((book) => (
                <Col key={book.id}>
                  <BookCard category={category} book={book} />
                </Col>
              ))}
            </React.Fragment>
          ))}
        </Row>
    </Container>
    );
  };
  
  export default BooksPage;