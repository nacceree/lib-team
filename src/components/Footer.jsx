import React from 'react';
import '../assets/css/footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
        <Container>
            <Row>
                <Col>
                    <a href="#">
                        <img src='../../Bookstore_Logo.png' alt='logo' className='img-fluid' style={{ maxWidth: "100px"}}/>
                    </a>
                </Col>
                <Col>
                    <ul className="list-unstyled">
                        <li><a href="" className='text-decoration-none text-white'>Privacy policy</a></li>
                        <li><a href="" className='text-decoration-none text-white'>Terms of Service</a></li>
                        <li><a href="" className='text-decoration-none text-white'>About us</a></li>
                        <li><a href="" className='text-decoration-none text-white'>Contact us</a></li>
                    </ul>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <ul className="list-unstyled footer-icons">
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" className='text-white'><FaInstagram size={30} /></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" className='text-white'><AiOutlineFacebook size={30} /></a>
                        </li>
                        <li>
                            <a href="https://x.com/?lang=en" target="_blank" className='text-white'><FaSquareXTwitter size={30} /></a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </footer>
  );
};

export default Footer;
