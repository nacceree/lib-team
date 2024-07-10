import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import logowa from "../assets/images/logowa.png";
import "../assets/css/Login.css";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(`Username: ${inputUsername}, Password: ${inputPassword}`);
    setLoading(false);

    // Example sign-in logic
    if (inputUsername !== "admin" || inputPassword !== "admin") {
      setShow(true);
    } else {
      setShow(false);
      // Redirect to dashboard or home page
    }
  };

  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col md={{ span: 4, offset: 4 }} className="bg-white p-4 rounded shadow">
          <img src={logowa} alt="logo" className="img-fluid mx-auto d-block mb-3" style={{ width: '50px' }} />
          <h4 className="text-center mb-3">Sign In</h4>
          {show && (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              Incorrect username or password.
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={inputUsername}
                placeholder="Enter your username"
                onChange={(e) => setInputUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={inputPassword}
                placeholder="Enter you password"
                onChange={(e) => setInputPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ backgroundColor: '#161c2d', color: '#fffff', border: 'none' }} className="w-100" disabled={loading}>
              {loading ? "Logging In..." : "Log In"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
