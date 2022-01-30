import React from 'react';
import {useState, Fragment} from 'react'
import { Button, Offcanvas, Navbar, Container}  from 'react-bootstrap'

function NavBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const styles = {
      backgroundColor: 'black',
      minWidth: '100vw',
      minHeight: '50px',
      color:'orange' 
    }
    const title = {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'orange',
    }
    const li = {
        listStyleType: 'none',
        color: 'orange',
        textDecoration: 'none',
        fontSize: '36px'
    }
    return (
      <>
      <Navbar fixed='top' bg='dark' style={{color: 'orange'}}>
      <Container>
        <Button variant="warning" style={{padding: 'auto'}} onClick={handleShow}>
          Launch
        </Button>
        <h1 style={title}>Lanlord Tenant App </h1>
        <Offcanvas style={{backgroundColor:'black'}} show={show} onHide={handleClose} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{color:'orange'}}>Landlord Tenant App</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
       <ul>
           <a href='./dashboard' style={{textDecoration: 'none'}}><li style={li}>Home</li></a>
           <a href='./properties' style={{textDecoration: 'none'}}><li style={li}>Properties</li></a>
           <a href='./showMessages' style={{textDecoration: 'none'}}><li style={li}>Messages</li></a>
           <a href='./about' style={{textDecoration: 'none'}}><li style={li}>About</li></a>
           <a href='./pay' style={{textDecoration: 'none'}}><li style={li}>Pay</li></a>
          
       </ul>
          </Offcanvas.Body>
        </Offcanvas>
        </Container>
        </Navbar>
      </>
    );
}

export default NavBar;
