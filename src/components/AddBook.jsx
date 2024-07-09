import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const AddBook = () => {
  const [bookImage, setBookImage] = useState(null);
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDescription, setBookDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      bookImage,
      bookName,
      bookAuthor,
      bookDescription,
    });

  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Form className="shadow p-4 bg-white rounded" style={{ width: "100%", maxWidth: "400px" }} onSubmit={handleSubmit}>
        <h2 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold' }}>Add New Book</h2>
        <Form.Group className="mb-3" controlId="formBookImage">
          <Form.Label>Upload book image</Form.Label>
          <Form.Control 
            type="file" 
            onChange={(e) => setBookImage(e.target.files[0])} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBookName">
          <Form.Label>Write book name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Write book name" 
            value={bookName}
            onChange={(e) => setBookName(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBookAuthor">
          <Form.Label>Write book author</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Write book author" 
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBookDescription">
          <Form.Label>Book Description</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Book Description" 
            value={bookDescription}
            onChange={(e) => setBookDescription(e.target.value)} 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          ADD BOOK
        </Button>
      </Form>
    </Container>
  );
};

export default AddBook;
