import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import homeImage from '../../style/images/homeImage.jpg'
import googleMail from '../../style/images/googleMail.jpg'
import requestImage from '../../style/images/maitanenceImg.jpg'
import mickey from '../../style/images/mickey.jpg'
import caroImage from '../../style/images/caroImg.jpg'
import space from '../../style/images/space.jpg'

const Dashboard = () => {
    // the carosue will be used to display all of the properties in the landlords object 
  return (
   
        <Container >
    <Row>
        <Col>
        <Carousel style={{marginBottom: '100px'}}>
  <Carousel.Item>
    <img
    height={500} width={300}
      className="d-block w-100"
      src={mickey}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height={500} width={300}
      className="d-block w-100"
      src={space}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height={500} width={300}
      className="d-block w-100"
      src={caroImage}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Col>

    </Row>
    <Row>
        <Col>
        <Card style={{ width: '18rem', height: '25rem', color:'orange' }} bg='dark' >
  <Card.Img variant="top" src={homeImage} height={250} width={250} />
  <Card.Body>
    <Card.Title>Properties</Card.Title>
    <Card.Text>
      This is a button link to the Properties that have been registered to the website. 
    </Card.Text>
    <Button variant="dark"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orange" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
</svg></Button>
  </Card.Body>
</Card></Col>
        <Col><Card style={{ width: '18rem', height: '25rem', color:'orange' }} bg='dark'>
  <Card.Img variant="top" src={googleMail} height={250} width={250}/>
  <Card.Body>
    <Card.Title>Messages</Card.Title>
    <Card.Text>
     This will take you to your Messages Page, and allow you to send and recieve messages. 
    </Card.Text>
    <Button variant="dark">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orange" class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
</svg></Button>
  </Card.Body>
</Card></Col>
        <Col><Card style={{ width: '18rem', height: '25rem', color:'orange' }} bg='dark'>
  <Card.Img variant="top" src={requestImage} height={250} width={250} />
  <Card.Body>
    <Card.Title>Maitanence Requests</Card.Title>
    <Card.Text>
    This will take you to the Maitanence Requests Page Fill out the form on here. 
    </Card.Text>
    <Button variant="dark"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="orange" class="bi bi-card-heading" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"/>
</svg>
    </Button>
  </Card.Body>
</Card></Col>
</Row>
  
        </Container>
  )
};

export default Dashboard;
