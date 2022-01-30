import React, {useState,useEffect} from 'react';
import {Form, Button} from 'react-bootstrap'

function Forms({userForm}) {
  const [user, setUser] = useState(userForm);
  useEffect(() => {
    
  setUser(user)  

  }, [user]);
  
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Keep Me Signed In" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  );
}

export default Forms;
