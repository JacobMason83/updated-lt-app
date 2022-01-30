import React from 'react';
import {Nav,Navbar, Container} from 'react-bootstrap'


function Footer() {
  return (
    <Navbar fixed='bottom' bg="dark" variant="dark">
    <Container>
    <Navbar.Brand style={{color: 'orange'}} href="#home">LT App</Navbar.Brand>
    <Nav className="me-auto" >
      <Nav.Link style={{color: 'orange'}} href="/dashboard">Home</Nav.Link>
      <Nav.Link style={{color: 'orange'}} href="/about">About</Nav.Link>
      <Nav.Link style={{color: 'orange'}} href="/pay">Pay</Nav.Link>
    </Nav>
    <Navbar.Brand style={{color: 'orange'}} href="#home">Rent With No Fear!</Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Footer;
