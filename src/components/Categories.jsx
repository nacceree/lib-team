import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Category from './Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Fakelist = [
  { id: 1, name: "Adventure", color: "#FF6B6B", icon: "🚀" },
  { id: 2, name: "Romance", color: "#FF8CC8", icon: "💖" },
  { id: 3, name: "Thriller", color: "#4ECDC4", icon: "🔪" },
  { id: 4, name: "Memoir", color: "#A06CD5", icon: "📖" },
  { id: 5, name: "Travel", color: "#45B7D1", icon: "🌍" },
  { id: 6, name: "Health", color: "#6BCB77", icon: "🍏" },
  { id: 7, name: "Poetry", color: "#F7B267", icon: "📝" },
  { id: 8, name: "Cooking", color: "#FF8CC8", icon: "🍴" }
];

const Allcategories = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <h1 className="text-center mb-5" style={{ color: '#333', fontWeight: 'bold' }}>
        Explore Our Book Categories
      </h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 mx-5">
        {Fakelist.map((category) => (
          <Col key={category.id}>
            <Link to={`/allbooks/${category.name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
              <Category {...category} />
            </Link>
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <Link to="/allbooks">
            <Button variant="primary" size="lg">
              Explore All Books
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
export default Allcategories;