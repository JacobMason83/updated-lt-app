import React from 'react';
import { Card, Container } from 'react-bootstrap';

function Property() {
    // the image will be brought in from the db along with the name, description, and price etc 
  return (
    <Container fluid style={{padding:'250px'}}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" /> 
  <Card.Body>
    <Card.Title>Property Name</Card.Title>
    <Card.Text>
    This is going to have a description of the property, and how much it is etc 
    </Card.Text>
    <Card.Text>
    Price
    </Card.Text>
   
  </Card.Body>
</Card>
    </Container>
  )
}

export default Property;
