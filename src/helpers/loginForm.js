import React, {useState,useEffect} from 'react';
import {Form, Button, FloatingLabel} from 'react-bootstrap'

function LoginForms({userForm}) {
  const [user, setUser] = useState(userForm);
  useEffect(() => {
    
  setUser(user)  

  }, [user]);
  
  return (
    <Form>
    {/* floating sign in for returning users  */}
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="Email Address"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
    </Form.Group>
    <Form.Group className="mb-3"  >
    <FloatingLabel
    controlId="floatingInput"
    label="Password"
    className="mb-3"
    style={{color: 'black'}}
  >
    <Form.Control type="password" placeholder="password" />
  </FloatingLabel>
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

export default LoginForms;
